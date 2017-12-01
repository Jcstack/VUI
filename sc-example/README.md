# project-vue
> A vue project.

## Development

```shell
npm run dev
```

## Production
```
npm run dist
```

### sdfile.js

1. Supported shortcut configures

```js
module.exports = {
  outputPath: path.resolve(__dirname, 'dist'), // 打包输出路径, 必须是 绝对路径
  publicPath: 'http://xxx.xx/', // 资源公网路径, 默认是 '/'
  externals: {
    jquery: 'jQuery' // 外部引入的全局变量
  },

  resolveAlias: { // 导入包别名
    // a list of module name aliases

    // 'module': 'new-module',
    // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

    // 'only-module$': 'new-module',
    // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

    // 'module': path.resolve(__dirname, 'app/third/module.js'),
    // alias "module" -> "./app/third/module.js" and "module/file" results in error
    // modules aliases are imported relative to the current context
  },

  // https://github.com/babel/babel/tree/master/experimental/babel-preset-env#options
  babelEnvOptions: {
    'targets': {
      browsers: ['last 2 Chrome versions']
    }
  },

  // https://github.com/danethurber/webpack-manifest-plugin#api
  manifestOptions: {}
}
```
2. Plugin entry by `install` method

```javascript
Object.defineProperty(module.exports, 'install', {
  value (webpackConfig, ctx) {
    // 可以自个完全控制webpack配置, 如果你乐意
    return Promise.resolve(webpackConfig)
  }
})
```

## License
ISC
