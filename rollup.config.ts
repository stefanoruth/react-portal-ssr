import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import bundleSize from 'rollup-plugin-bundle-size'

const buildConfig = name => ({
    input: `src/${name}.ts`,
    output: [
        {
            file: `dist/${name}.cjs.js`,
            format: 'cjs',
        },
        {
            file: `dist/${name}.esm.js`,
            format: 'es',
        },
    ],
    external: ['react', 'react-dom', 'cheerio', 'react-dom/server'],
    plugins: [
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        bundleSize(),
    ],
})

export default [buildConfig('client'), buildConfig('server')]
