export const vertexShader = /* glsl */ `
    varying vec2 vUv;
    varying vec4 worldPos;
    void main() {
        vUv = uv;
        worldPos = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const fragmentShader = /* glsl */ `
    uniform float uInterval;
    uniform float uLineThickness;
    uniform vec3 uColor;
    varying vec2 vUv;
    varying vec4 worldPos;

    void main() {
        vec2 uv = vUv;
        vec3 col = uColor;

        float offset = (uLineThickness / 2.0) - ((1.0 - uInterval) / 2.0);
        
        if (mod(uv.x + offset, uInterval) < uLineThickness || mod(uv.y + offset, uInterval) < uLineThickness) {
            col = vec3(0.46); 
        }

        gl_FragColor = vec4(col, 0.5);
    }
`
