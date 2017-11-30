const {executeRollup} = require('@vui/rollup-standalone')
const path = require('path')


const localPopperPath = path.resolve(__dirname, '../sources/plugins/popper.js')

executeRollup({
  entry: 'packages/index.js',
  dest: 'dist/vui.packages.js',
  format: 'umd',
  vueOptions: true,
  moduleName: 'vui',
  commonjsOptions: {
    include: ['node_modules/**',
      localPopperPath
    ],
    namedExports: {}
  }
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p)
  console.log('reason:', reason)
})
