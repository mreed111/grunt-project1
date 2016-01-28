module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        unit: {
            configFile: 'karma.conf.js'
        }
    };
    
    grunt.config('karma', config);
}
