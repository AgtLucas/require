'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define paths
    meta: {
      srcPathSass: 'styles/sass/',
      srcPathJS: 'src/js/',
      buildPathCSS: 'styles/css/',
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

    // Compass
    compass: {
      dist: {
        options: {
          require: 'susy',
          sassDir: '<% meta.srcPathSass %>',
          cssDir: '<% meta.buildPathCSS %>',
          environment: 'production'
        }
      },
      dev: {
        options: {
          require: 'susy',
          sassDir: '<% meta.srcPathSass %>',
          cssDir: '<% meta.buildPathCSS %>'
        }
      }
    },

    // Connect
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true
        }
      }
    },

    // Watch
    watch: {
      compass: {
        files: ['<% meta.srcPathSass %>**/*.{scss,sass}'],
        tasks: ['compass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
}