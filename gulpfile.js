var gulp = require('gulp'),
    clean = require('gulp-clean'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha');

var paths = {
  scripts: ['index.js'],
  tests: ['test/**/*.js']
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', function () {
  return gulp.src(paths.tests, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['lint', 'test']);

