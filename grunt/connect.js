module.exports = function (grunt) {
    'use strict';
    //
    var config = {
        server: {
            options: {
                base: './dist/',    // base url (dist folder).
                keepalive: true,    // Web server should stay open
                open: true          // open the default web browser
            }
        }
    };
    
    grunt.config('connect', config);
}
