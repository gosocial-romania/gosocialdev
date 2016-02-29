module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      nodejs: {
        src: [
              './bower_components/jquery/dist/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './bower_components/underscore/underscore.js',
              './bower_components/angular/angular.js',
              './bower_components/angular-ui-router/release/angular-ui-router.js',
              './bower_components/angular-resource/angular-resource.js',
              ],
        dest: 'public/js/dependente.js',
      },
      nodecss: {
        src: [
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './bower_components/bootstrap/dist/css/bootstrap-theme.css'
        ],
        dest: 'public/css/dependente.css'
      },
      scripts: {
        src: [
          './source/app.js'
        ],
        dest: 'public/js/scripts.js'
      }
    },
    jade: {
      compile: {
        options: {
          client: false,
          pretty: false
        },
        files: [{
          cwd: "source/",
          src: "**/*.jade",
          dest: "tmp/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    html2js: {
      options: {
        rename: function (moduleName) {
          return moduleName.replace('../tmp/', '');
        }
      },
      main: {
        src: ['./tmp/**/*.html'],
        dest: 'public/js/templates.js'
      },
    },
    copy: {
      index: {
        files: [
          {
            src: './tmp/index.html',
            dest: './public/index.html'
          }
        ]
      },
      fonts: {
        files: [
          {
            src: './bower_components/bootstrap/dist/fonts/**/*',
            dest: './public/fonts/',
            expand: true,
            flatten: true
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['source/**/*.js'],
        tasks: ['concat:scripts', 'notify:scripts'],
        options: {
          spawn: false,
        },

      },
      styles: {
        files: ['source/modules/**/*.css'],
        tasks: ['concat:nodecss', 'notify:css'],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ['source/**/*.jade'],
        tasks: ['jade', 'html2js', 'copy:index', 'notify:html'],
        options: {
          spawn: false,
        },
      },
    },
    notify: {
      scripts: {
        options: {
          title: "JS Updated",
          message: "JavaScript completed"
        }
      },
      css: {
        options: {
          title: "CSS Updated",
          message: "Styles completed"
        }
      },
      html: {
        options: {
          title: "HTML Updated",
          message: "Jade completed"
        }
      }
    },
    nodemon: {
      start: {
        script: 'server.js',
        options: {
          watch: ['server.js']
        }
      }
    },
    concurrent: {
      dev: ['nodemon', 'dev'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  //Load tasks

  require('load-grunt-tasks')(grunt);

  //Register tasks
  grunt.registerTask('default', ['concurrent']);


  grunt.registerTask('dev', ['concat', 'jade', 'html2js', 'copy', 'watch', 'notify']);

};