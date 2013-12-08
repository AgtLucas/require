'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define paths
    meta: {
      srcPathSass: 'styles/',
      srcPathJS: 'src/js/',
      buildPathCSS: 'styles/',
      buildPathJS: 'build/js/'
    },

    // Compass
    compass: {
      dist: {
        options: {
          require: 'susy',
          sassDir: 'src/sass',
          cssDir: 'build/css',
          environment: 'production'
        }
      }
    },

    // RequireJS
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "src/js",
          mainConfigFile: "src/js/main.js",
          out: "build/js/main.min.js"
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
      },
      html: {
        files: '*.html'
      },
      options: {
        livereload: '<%= connect.options.livereload %>'
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