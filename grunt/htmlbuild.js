module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            src: 'index.html',
            dest: 'dist/index.html',
            options: {
                //prefix: '/',    // defines path to resources
                relative: true,     // makes paths of injected resources relative
                // resources to be injected
                scripts: {
                    'package': ['dist/js/package.min.js', 'dist/js/app.js']
                },
                styles: {
                    css: 'dist/css/styles.min.css'
                }
            }
        },
        dev: {
            src: 'index.html',
            dest: 'dist/index.html',
            options: {
                //prefix: '/',    // defines path to resources
                relative: true,     // makes paths of injected resources relative
                // resources to be injected
                scripts: {
                    'package': ['dist/js/package.js', 'dist/js/app.js']
                },
                styles: {
                    css: 'dist/css/styles.css'
                }
            }
        }
    };
    
    grunt.config('htmlbuild', config);
}
