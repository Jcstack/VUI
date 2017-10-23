const gulp = require('gulp')
const path = require('path')

function _covert () {
  return gulp.src('../scss/**/*.sass')
  .pipe(gulp.dest('../sass'))
}

_covert().on('finish', () => {
  console.log('// DONE //')
})
