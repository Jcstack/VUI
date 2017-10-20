const {executeRollup} = require('@vui/rollup-standalone')

executeRollup({
  entry: 'packages/index.js',
  dest: 'dist/vui.packages.js',
  format: 'umd',
  vueOptions: true,
  moduleName: 'vui'
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p)
  console.log('reason:', reason)
})
