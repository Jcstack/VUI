const sass = require('node-sass')
const path = require('path')
const {mkdirAsync, writeFileAsync} = require('./file')

let distCssDir = path.resolve(__dirname, '../dist/')

let includePaths = [
  path.resolve(__dirname, '../scss')
]

// nested, expanded, compact, compressed
let outputStyle = 'expanded'

mkdirAsync(distCssDir).then(() => {
  return Promise.all([
    sassRenderAsync({
      outputStyle,
      sourceMap: true,
      file: path.resolve(__dirname, '../scss/vui.scss'),
      outFile: path.resolve(distCssDir, 'vui.css'),
      includePaths
    }),
    sassRenderAsync({
      outputStyle,
      sourceMap: true,
      file: path.resolve(__dirname, '../scss/generics.scss'),
      outFile: path.resolve(distCssDir, 'generics.css'),
      includePaths
    }),
  ]).then(() => {
    console.log('Done')
  })
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

function sassRenderAsync (opts) {
  return new Promise((resolve, reject) => {
    sass.render(opts, (err, result) => {
      if (err) {
        return reject(err)
      }
      let {outFile, sourceMap} = opts
      let ret = [writeFileAsync(outFile, result.css)]
      if (sourceMap) {
        ret.push(writeFileAsync(outFile + '.map', result.map))
      }
      Promise.all(ret).then(resolve, reject)
    })
  })
}