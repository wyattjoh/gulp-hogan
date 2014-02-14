'use strict';
var map = require('map-stream');
var es = require('event-stream');;
var gutil = require('gulp-util');
var Hogan = require('hulkster');

module.exports = function(data) {
  data = data || {};
  return es.map(function (file, cb) {
    var compiled = Hogan.compile(file.path, {minify: 'true'});

    file.contents = new Buffer( compiled.template );
    file.path = gutil.replaceExtension(file.path, '.js');
    cb(null,file);
  });
};