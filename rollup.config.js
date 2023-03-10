import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/main.ts',
    output: {
        file: 'bundle.js',
    },
    plugins: [
        nodeResolve({ browser: true }),
        typescript(),
        terser(),
    ],
};