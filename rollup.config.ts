import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import bundleSize from 'rollup-plugin-bundle-size'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default [
    {
        input: 'src/client.tsx',
        output: [
            {
                file: 'dist/client.js',
                format: 'es',
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            commonjs(),
            typescript(),
            getBabelOutputPlugin({
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: 'umd',
                            targets: {
                                browsers: 'ie >= 11',
                            },
                        },
                    ],
                ],
            }),
            bundleSize(),
        ],
    },
    {
        input: 'src/server.tsx',
        output: [
            {
                file: 'dist/server.js',
                format: 'es',
            },
        ],
        external: ['react', 'react-dom', 'cheerio', 'react-dom/server'],
        plugins: [commonjs(), typescript(), bundleSize()],
    },
]
