module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            files: {
                'dist/js/package.min.js': 'dist/js/**/*.js'
            }
        },
        options: {
            sourceMap: true,
            // Map the uglified source file back to 
            //the original coffee script.
            sourceMapIn: 'dist/js/package.js.map'
        }
    };
    
    grunt.config('uglify', config);
}
