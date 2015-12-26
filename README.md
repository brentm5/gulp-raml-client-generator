[![Travis branch](https://img.shields.io/travis/bigbam505/gulp-raml-client-generator/master.svg?style=flat-square)](https://travis-ci.org/bigbam505/gulp-raml-client-generator)
# RAML Client Generator for Gulp

## Purpose

This allows for a raml file to be turned into a client library via the javascript-raml-generator node module with gulp even easier!


## Usage

The basic usage is as such

```javascript
var gulp = require('gulp'),
    ramlClientGenerator('gulp-raml-client-generator');

// This will generate a file named /dist/client.js
gulp.task('generate-client', function() {
  gulp.src('api.raml')
    .pipe(ramlClientGenerator())
    .pipe(gulp.dest('dist/'));
});

// This will generate a file named /dist/index.js
gulp.task('generate-client', function() {
  gulp.src('api.raml')
    .pipe(ramlClientGenerator({ filename: "index.js"}))
    .pipe(gulp.dest('dist/'));
});

```

