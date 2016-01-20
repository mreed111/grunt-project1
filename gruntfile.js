var fs = require('fs');

module.exports = function (grunt) {
    'use strict';
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        //
        jshint: {
            files: {
                src: ['js/**/*.js', 'test/**/*.js']
            }
        },
        clean: [ 'dist/**/*'],
        coffee: {
            dist: {
                files: {
                    'dist/js/package.js': 'coffee/**/*.coffee'
                }
            },
            options: {
                sourceMap: true
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css': 'sass/**/*.scss'
                }
            },
            options: {
                sourceMap: true
            }
        },
        uglify: {
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
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'js',
                    out: 'dist/js/app.js',
                    include: 'main',
                    name: 'vendor/almond'
                }
            }
        },
        cssmin: {
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
        },
        copy: {
            dev: {
                files: [
                    {
                        src: 'node_modules/grunt-contrib-requirejs/node_modules/requirejs/require.js',
                        dest: 'dist/js/vendor/require.js'
                    },{
                        expand: true,   // allows file list to be built dynamically
                        src: ['js/**'],
                        dest: 'dist'
                    }
                ]
            }
        },
        htmlbuild: {
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
        },
        connect: {
            server: {
                options: {
                    base: './dist/',    // base url (dist folder).
                    keepalive: true,    // Web server should stay open
                    open: true          // open the default web browser
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        gitadd: {
            dist: {
                options: {
                    all: true
                }
            }
        }
    });
     
    grunt.registerTask('default', 'my default task', ['jshint', 'clean', 'coffee', 'sass', 'uglify', 'requirejs', 'cssmin', 'copy', 'htmlbuild:dev', 'connect']);
    
    grunt.registerTask('pre-build', ['jshint', 'karma', 'clean', 'coffee', 'sass']);
    grunt.registerTask('compress', ['uglify', 'requirejs', 'cssmin']);
    
    grunt.registerTask('build:dev', ['pre-build', 'compress', 'copy', 'htmlbuild:dev', 'conect']);
    grunt.registerTask('build:dist', ['pre-build', 'compress', 'htmlbuild:dist', 'conect']);
    
}

// see coffeescript.org for more coffee details...