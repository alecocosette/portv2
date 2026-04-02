#define SDL_MAIN_HANDLED
#include <SDL2/SDL.h>
#include <GL/glew.h>
#include <GL/gl.h>
#include <fstream>
#include <sstream>


std::string loadFile(const char* path)
{
    std::ifstream file(path);
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

int main() {

    SDL_Init(SDL_INIT_VIDEO);

    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 2);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 1);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_CORE);

    SDL_Window* window = SDL_CreateWindow(
        "Stars",
        SDL_WINDOWPOS_CENTERED,
        SDL_WINDOWPOS_CENTERED,
        800, 600,
        SDL_WINDOW_OPENGL
    );

    SDL_GLContext glContext = SDL_GL_CreateContext(window);
    SDL_GL_SetSwapInterval(1);
    glewExperimental = GL_TRUE;
    glewInit();
    SDL_SetWindowFullscreen(window, SDL_WINDOW_FULLSCREEN_DESKTOP);

    std::string vertex = loadFile("vertex.glsl");
    const char* vertexData = vertex.c_str();
    GLuint vertexsrc = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertexsrc, 1, &vertexData, NULL);
    glCompileShader(vertexsrc);
    std::string fragment = loadFile("fragment.glsl");
    const char* fragmentData = fragment.c_str();
    GLuint fragmentsrc = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragmentsrc, 1, &fragmentData, NULL);
    glCompileShader(fragmentsrc);
    GLuint program = glCreateProgram();
    glAttachShader(program, vertexsrc);
    glAttachShader(program, fragmentsrc);
    float quad[] = {
        -1, -1,
         1, -1,
         1,  1,
        -1,  1
    };
    GLuint vbo;
    glGenBuffers(1, &vbo);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(quad), quad, GL_STATIC_DRAW);
    glLinkProgram(program);
    glUseProgram(program);

    GLint pos = glGetAttribLocation(program, "position");
    glEnableVertexAttribArray(pos);
    glVertexAttribPointer(pos, 2, GL_FLOAT, GL_FALSE, 0, 0);




    // MAIN LOOP
    bool running = true;
    SDL_Event event;

    while (running) {

        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT)
                running = false;
        }
        int width, height;
        SDL_GL_GetDrawableSize(window, &width, &height);
        glViewport(0, 0, width, height);

        GLint resolutionLoc = glGetUniformLocation(program, "u_resolution");
        glUniform2f(resolutionLoc, (float)width, (float)height);
        glClearColor(0.05f, 0.07f, 0.15f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);

        glDrawArrays(GL_TRIANGLE_FAN, 0, 4);

        SDL_GL_SwapWindow(window);


    }

    SDL_GL_DeleteContext(glContext);
    SDL_DestroyWindow(window);
    SDL_Quit();
}