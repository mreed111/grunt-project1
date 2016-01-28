module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dev: {
            files: [
                {
                    src: 'node_modules/grunt-contrib-requirejs/node_modules/requirejs/require.js',
                    dest: 'dist/js/vendor/require.js'
                }, {
                    expand: true,   // allows file list to be built dynamically
                    src: ['js/**'],
                    dest: 'dist'
                }
            ]
        }
    };
    
    grunt.config('copy', config);
}
