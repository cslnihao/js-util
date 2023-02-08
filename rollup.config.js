import resolve from 'rollup-plugin-node-resolve'
import {uglify} from 'rollup-plugin-uglify'
import {terser} from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

export default {
    input: 'index.js',
    output: {
        file: 'dist/c-util.umd.min.js',
        format: 'umd',
        name: 'cUtil',
        plugins: [terser()]
    },
    plugins: [
      resolve(),
      babel({
          exclude: 'node_modules/**'
      }),
      uglify(),
    ]
}