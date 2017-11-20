const path = require('path')

module.exports = {
  title: 'Vui Packages Document'
}

Object.defineProperty(module.exports, 'use', {
  value (ctx) {
    const webpackConfig = ctx.RESOLVED_WEBPACK_CONFIG

    webpackConfig.resolve.alias['root'] = path.resolve(__dirname, '../../')
    webpackConfig.resolve.alias['packages'] = path.resolve(__dirname, '../../packages')
    webpackConfig.resolve.alias['sources'] = path.resolve(__dirname, '../../sources')
    webpackConfig.resolve.alias['docs_lib'] = path.resolve(__dirname, '../../docs_lib')

    return Promise.resolve()
  }
})
