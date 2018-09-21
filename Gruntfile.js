module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          options: {
              sourcemap: 'none',
              update : true,
          },
          dist: {
            files: [
              {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: ['**/*.{scss,sass}'],
                dest: 'src/',
                ext: '.css'
              }
            ]
          }
        },

        autoprefixer: {
            dist: {
                files: [{
                  expand: true,
                  cwd: 'src/',
                  src: '**/*.css',
                  dest: 'src/'
                }]
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            combine : {
                files: {
                    'dist/sortable-tables.min.css': ['src/**/*.css'],
                },
            },
        },

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
            files: ['src/**/*.{sass,scss,css}'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
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

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-es6-transpiler');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

};
