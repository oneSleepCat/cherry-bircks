import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import {
  nodeResolve
} from '@rollup/plugin-node-resolve';
import {
  name
} from '../package.json';

const file = (type) => `dist/${name}.${type}.js`;
const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['node_modules',]
}
export {
  name,
  file
}

export default {
  input: 'src/index.ts',
  output: {
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides
    }),
    vuePlugin(),
    css({
      output: 'bundle.css'
    })
  ],
  external: ['vue', 'lodash-es']
}