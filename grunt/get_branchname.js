module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        dist: {
            options: {
                target: 'gitrebase.dist.options.branch',
                quiet: true
            }
        }
    };
    
    grunt.config('get_branchname', config);
}
