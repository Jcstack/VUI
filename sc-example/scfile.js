const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  externals: {
    vue: 'Vue'
  },

  resolveAlias: {
    'packages': path.resolve(__dirname, '../packages')
    // a list of module name aliases

    // 'module': 'new-module',
    // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

    // 'only-module$': 'new-module',
    // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

    // 'module': path.resolve(__dirname, 'app/third/module.js'),
    // alias "module" -> "./app/third/module.js" and "module/file" results in error
    // modules aliases are imported relative to the current context
  },

  babelEnvOptions: {
    targets: {
      chrome: 54
    },
    debug: true
  }
}

Object.defineProperty(module.exports, 'install', {
  value (webpackConfig, ctx) {

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.tpl')
    }))

    return Promise.resolve(webpackConfig)
  }
})
