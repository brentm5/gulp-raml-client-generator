'use strict';

var through = require('through2'),
    gutil = require('gulp-util'),
    PluginError = gutil.PluginError,
    ramlParser = require('raml-parser'),
    jsGenerator = require('raml-javascript-generator');

module.exports = function(options) {
  options = options || {};
  options.filename = options.filename || "client.js";

  function createFile(name, content) {
    return new gutil.File({
      path: name,
      contents: new Buffer(content)
    });
  }

    return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      this.emit('error', new PluginError("gulp-shit", 'Streams not supported!'));
    }

    if (file.isBuffer()) {
      ramlParser.load(file.contents).then(function (raml) {
        var generator = jsGenerator(raml);
        var generatedClient = createFile(options.filename, generator.files['index.js']);
        callback(null, generatedClient);
      });
    }
  });
};
