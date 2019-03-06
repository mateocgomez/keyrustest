module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less:{
            development: {
                options: {
                    paths: ["less/"]
                },
                files:{
                    'css/styles.css' : 'less/styles.less'
                }
            }
        },

        watch:{
            less:{
                files: ['less/*.less'],
                task: ['less', 'cssmin'],
            }
        },

      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint']);
  
  };