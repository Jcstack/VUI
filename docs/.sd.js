const path = require('path')

module.exports = {
  title: 'Sav Vui Document'
}

Object.defineProperty(module.exports, 'use', {
  value (ctx) {
    const webpackConfig = ctx.RESOLVED_WEBPACK_CONFIG

    webpackConfig.resolve.alias['root'] = path.resolve(__dirname, '..')
    webpackConfig.resolve.alias['packages'] = path.resolve(__dirname, '../packages')

    return Promise.resolve()
  }
})
