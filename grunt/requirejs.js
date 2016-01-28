module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            options: {
                baseUrl: 'js',
                out: 'dist/js/app.js',
                include: 'main',
                name: 'vendor/almond'
            }
        }
    };
    
    grunt.config('requirejs', config);
}
