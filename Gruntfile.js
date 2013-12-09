module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'app/js/main.js': [
						'app/bower_components/angular/angular.min.js',
						'app/js/app.js',
						'app/js/*/*.js'
					]
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/js/*.js', 'app/js/*/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);
};