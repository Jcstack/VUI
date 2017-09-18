const gulp = require('gulp')
const path = require('path')

function _covert () {
  return gulp.src('../sass/**/*.scss')
  .pipe(gulp.dest('../scss'))
}

_covert().on('finish', () => {
  console.log('// DONE //')
})
