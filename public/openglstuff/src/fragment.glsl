#version 120

uniform vec2 u_resolution;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

void main()
{
    // normalize coordinates (0 to 1)
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // scale star density independent of resolution
    float density = 300.0;

    float star = step(0.9975, rand(floor(uv * density)));

    vec3 spaceColor = vec3(0.03, 0.05, 0.12);

    vec3 color = mix(spaceColor, vec3(1.0), star);

    gl_FragColor = vec4(color, 1.0);
}