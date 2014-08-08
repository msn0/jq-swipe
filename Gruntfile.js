module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      article: {
        options: {
          mangle: true
        },
        files: {
          'dist/jq-swipe.min.js': 'src/jq-swipe.js'
        }
      }
    },
    anonymous: {
      dist: {
        options: {
          params: [
            ['window.jQuery || window.Zepto', '$']
          ]
        },
        files: {
          'dist/jq-swipe.min.js': 'dist/jq-swipe.min.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-anonymous');

  grunt.registerTask("default", ['jshint', 'uglify', 'anonymous']);
};