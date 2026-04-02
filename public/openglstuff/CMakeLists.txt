cmake_minimum_required(VERSION 3.16)
project(openglstuff)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(openglstuff
        src/firstOne.cpp
)

target_include_directories(openglstuff PRIVATE
        ${CMAKE_SOURCE_DIR}/libs/SDL2/SDL2-2.28.5/x86_64-w64-mingw32/include
)

target_link_directories(openglstuff PRIVATE
        ${CMAKE_SOURCE_DIR}/libs/SDL2/SDL2-2.28.5/x86_64-w64-mingw32/lib
)

target_link_libraries(openglstuff PRIVATE
        SDL2main
        SDL2
        opengl32
        glew32
)