'use strict';

module.exports = function(grunt) {
  // Load tasks
  require('load-grunt-tasks')(grunt);
  // Project configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define paths
    meta: {
      srcPathSass: 'app/src/sass/',
      srcPathJS: 'app/src/js/',
      buildPathCSS: 'app/build/css/',
      buildPathJS: 'app/build/js/'
    },

    // Compass
    compass: {
      dist: {
        options: {
          require: 'susy',
          sassDir: 'app/src/sass',
          cssDir: 'app/build/css',
          environment: 'production'
        }
      }
    },

    // TODO: Make RequireJS work properly
    // RequireJS
    requirejs: {
      prod: {
        options: {
          baseUrl: ".",
          mainConfigFile: "app/config/requireconfig.js",
          deps: ['app/src/js/main'],
          insertRequire: ['app/src/js/main'],
          name: "bower/almond/almond",
          out: "app/build/js/main.min.js",
          optimize: 'uglify2',
          preserveLicenseComments: false
          // done: function(done, output) {
          //   var duplicates = require('rjs-build-analysis').duplicates(output);

          //   if (duplicates.length > 0) {
          //     grunt.log.subhead('Duplicates found....');
          //     grunt.log.warn(duplicates);
          //     done(new Error('r.js built duplicate modules, please check the excludes option.'));
          //   }

          //   done();
          // }
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

  grunt.registerTask('default', ['connect', 'watch']);
}