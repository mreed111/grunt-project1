module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            files: {
                'dist/js/package.js': 'coffee/**/*.coffee'
            }
        },
        options: {
            sourceMap: true
        }
    };
    
    grunt.config('coffee', config);
}
