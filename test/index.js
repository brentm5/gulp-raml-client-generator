var assert = require('assert');
var es = require('event-stream');
var gutil = require('gulp-util');
var ramlClientGenerator = require('../');

describe('gulp-raml-client-generator', function() {
  describe('in buffer mode', function() {
    it('should generate a client file from raml', function(done) {
      var stream = ramlClientGenerator();

      // create the fake file
      var ramlFile = new gutil.File({
        contents: new Buffer('abufferwiththiscontent')
      });

      //For some reason this doesnt work
      stream.on('data', function(file) {
        console.log(data);
        assert(file.isBuffer());
        assert.equal(file.path, "index.jss");

        // check the contents
        assert.equal(file.contents.toString('utf8'), 'hello');
        done();
      });

      stream.write(ramlFile);
      stream.end();

      done();
    });
  });
});
