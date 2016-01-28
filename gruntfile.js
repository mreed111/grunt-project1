var fs = require('fs');

module.exports = function (grunt) {
    'use strict';
    
    require('load-grunt-tasks')(grunt);
    
    // initConfig object is build on the fly by grunt.loadTasks command.
    //grunt.initConfig({
        //jshint:
        //clean: 
        //coffee:
        //sass:
        //uglify:
        //requirejs:
        //cssmin:
        //copy: 
        //htmlbuild:
        //connect:
        //karma:
        //gitadd:
        //gitcommit:
        //gitcheckout:
        //gitrebase:
        //get_branchname:
    //});
    
    /*
    // this custom task is replaced by the grunt-get-branchname plugin.
    // custom task definition
    grunt.registerTask('get-branch', function () {
        var done = this.async();
        // 
        grunt.util.spawn({  // spawn git as a child process.
            cmd: 'git',
            args: ['symbolic-ref', 'HEAD', '--short']
        }, function (error, result) {
            grunt.config.set('gitrebase.dist.options.branch', result);
            console.log('gitrebase.dist.options.branch');
            done();
        });
    });
    */
    
    grunt.loadTasks('grunt'); // load task files into grunt.initConfig({}) object from 'grunt folder.
     
    grunt.registerTask('default', 'my default task', ['jshint', 'clean', 'coffee', 'sass', 'uglify', 'requirejs', 'cssmin', 'copy', 'htmlbuild:dev', 'connect']);
    
    grunt.registerTask('pre-build', ['jshint', 'karma', 'clean', 'coffee', 'sass']);
    grunt.registerTask('compress', ['uglify', 'requirejs', 'cssmin']);
    
    grunt.registerTask('build:dev', ['pre-build', 'compress', 'copy', 'htmlbuild:dev', 'connect']);
    grunt.registerTask('build:dist', ['pre-build', 'compress', 'htmlbuild:dist', 'git',  'connect']);
    
    grunt.registerTask('git', ['gitadd', 'gitcommit', 'get_branchname', 'gitcheckout', 'gitrebase']);
    
};

// see coffeescript.org for more coffee details...
