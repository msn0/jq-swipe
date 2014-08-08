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
          'dist/jq-swipe.min.js': [
            'src/jq-swipe.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("default", ['jshint', 'uglify']);
};