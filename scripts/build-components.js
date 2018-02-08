const {executeRollup} = require('@vui/rollup-standalone')
// const builtins = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')
const path = require('path')
const localPopperPath = path.resolve(__dirname, '../sources/plugins/popper.js')
const localDebugPath = path.resolve(__dirname, '../sources/utils/debug.js')

executeRollup({
  entry: 'packages/index.js',
  dest: 'dist/vui.packages.js',
  format: 'iife',
  vueOptions: true,
  moduleName: 'vui',
  commonjsOptions: {
    include: ['node_modules/**',
      localPopperPath,
      localDebugPath
    ],
    namedExports: {},
    ignore: ['util', 'tty'],
    ignoreGlobal: false
  },
  resolveOptions: {},
  extraPlugins: [
    globals()
    // builtins()
  ],
  external: ['vue'],
  globals: {
    debug: 'debug',
    'vue': 'Vue'
  }
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p)
  console.log('reason:', reason)
})
