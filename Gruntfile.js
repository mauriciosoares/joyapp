module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'app/app.min.js': [
						'app/bower_components/angular/angular.min.js',
						'app/bower_components/angular-touch/angular-touch.min.js',
						'app/bower_components/angular-route/angular-route.min.js',
						'app/bower_components/angular-animate/angular-animate.min.js',
						'app/js/app.js',
						'app/js/*/*.js'
					]
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'app/css/app.min.css': [
						'app/bower_components/normalize-css/normalize.css',
						'app/css/dev/fontface.css',
						'app/css/dev/base.css',
						'app/css/dev/modules.css',
						'app/css/dev/states.css',
						'app/css/dev/angulartransitions.css'
					]
				}
			}
		},
		watch: {
			scripts: {
				files: ['app/css/dev/*.css'],
				tasks: ['cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['cssmin']);
};