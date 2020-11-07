const sass = require('node-sass');

module.exports = function (grunt) {
  // 1. Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // 2. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'src/',
            src: ['**/*.{scss,sass}'],
            dest: 'tmp/',
            ext: '.css'
          }
        ]
      }
    },

    autoprefixer: {
        dist: {
            files: [{
              expand: true,
              cwd: 'tmp/',
              src: '**/*.css',
              dest: 'tmp/'
            }]
        }
    },

    cssmin: {
        options: {
            keepSpecialComments: 0
        },
        combine : {
            files: {
                'dist/sortable-tables.min.css': ['tmp/**/*.css'],
            },
        },
    },

    clean: ['tmp'],

    concat: {
      js: {
        options: {
          separator: ';\n',
        },
        src: ['src/**/*.js'],
        dest: 'dist/sortable-tables.min.js',
      }
    },

    es6transpiler: {
      dist: {
        files: {
          'dist/sortable-tables.min.js': 'dist/sortable-tables.min.js'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/sortable-tables.min.js': ['dist/sortable-tables.min.js']
        }
      }
    },

    watch: {
      styles: {
        files: ['src/**/*.{sass,scss}'],
        tasks: ['sass', 'autoprefixer', 'cssmin', 'clean'],
        options: {
          spawn: false,
        },
      },

      scripts: {
        files: ['src/**/*.js'],
        tasks: ['concat:js', 'es6transpiler', 'uglify'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('build', [
    'sass',
    'autoprefixer',
    'cssmin',
    'clean',
    'concat:js',
    'es6transpiler',
    'uglify'
  ]);
  grunt.registerTask('default', ['build', 'watch']);
};
