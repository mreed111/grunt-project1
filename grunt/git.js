module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        //gitadd:
        dist: {
            options: {
                all: true
            }
        }
    };
    grunt.config('gitadd', config);

    config = {
        //gitcommit:
        dist: {
            options: {
                message: grunt.option('commit-message')
            }
        }
    };
    grunt.config('gitcommit', config);
    
    config = {
        //gitcheckout:
        dist: {
            options: {
                branch: 'master'
            }
        }
    };
    grunt.config('gitcheckout', config);
    
    config = {
        //gitrebase:
        dist: {
            options: {
                branch: '' // will be populated by 'get-branch' custom task.
            }
        }
    };
    grunt.config('gitrebase', config);
}
