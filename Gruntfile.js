'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define paths
    meta: {
      srcPathSass: 'src/sass/',
      srcPathJS: 'src/js/',
      buildPathCSS: 'build/css/',
      buildPathJS: 'build/js/'
    },

    // // Sass
    // sass: {
    //   dist: {
    //     // Grab the main.scss and make the main.css
    //     files: {
    //       '<%= meta.buildPathCSS %>main.css' : '<%= meta.srcPathSass %>main.scss'
    //     },
    //     // Minify Sass
    //     options: {
    //       style: 'compressed'
    //     }
    //   }
    // },

    compass: {
      dist: {
        options: {
          require: 'susy',
          sassDir: '<% meta.srcPathSass %>',
          cssDir: '<% meta.buildPathSass %>',
          environment: 'production'
        }
      },
      dev: {
        options: {
          require: 'susy',
          sassDir: '<% meta.srcPathSass %>',
          cssDir: '<% meta.buildPathSass %>'
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);
}