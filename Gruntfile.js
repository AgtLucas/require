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

    // TODO: Make RequireJS work properly
    // RequireJS
    requirejs: {
      compile: {
        options: {
          baseUrl: "src/js",
          mainConfigFile: "src/js/main.js",
          out: "build/js/main.min.js"
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);

            if (duplicates.length > 0) {
              grunt.log.subhead('Duplicates found....');
              grunt.log.warn(duplicates);
              done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }

            done();
          }
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