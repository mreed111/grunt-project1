module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        files: {
            src: ['js/**/*.js', 'test/**/*.js']
        }
    };
    
    grunt.config('jshint', config);
}
