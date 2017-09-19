const gulp = require('gulp')
const clean = require('gulp-clean')

function _clean () {
  return gulp.src([
    '../sass/**/*.scss'
  ]).pipe(clean({
    force: true
  }))
}

_clean().on('finish', function () {
  console.log('//Finished//')
})