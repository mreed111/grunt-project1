module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            files: {
                'dist/css/styles.css': 'sass/**/*.scss'
            }
        },
        options: {
            sourceMap: true
        }
    };
    
    grunt.config('sass', config);
}
