module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            files: {
                'dist/css/styles.min.css': 'dist/css/**/*.css'
            }
        },
        options: {
            sourceMap: true
            // no sourceMapIn required.
            // cssmin will automatically search for a map file and use it.
        }
    };
    
    grunt.config('cssmin', config);
}
