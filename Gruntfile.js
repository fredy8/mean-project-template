'use strict';

var angularFiles = [
	'angular-app/app.js',
	'angular-app/controllers/**/*.js',
	'angular-app/directives/**/*.js',
	'angular-app/filters/**/*.js',
	'angular-app/factories/**/*.js'
];

module.exports = function (grunt) {
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
		'grunt-contrib-uglify',
		'grunt-contrib-cssmin',
		'grunt-contrib-watch',
		'grunt-hashres',
		'grunt-contrib-csslint',
		'grunt-nodemon'
		//'grunt-lint-pattern'
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: {
				src: 'api/tests/**/*.js', options: { ui: 'bdd' }
			}
		},
		jshint: {
			server: ['server.js', 'server/**/*.js', 'Gruntfile.js'],
			api: ['api/**/*.js'],
			frontend: ['angular-app/**/*.js'],
			options: {
				jshintrc: true
			}
		},
		csslint: {
			csslint: {
					strict: {
						options: {
							csslintrc: '.csslintrc'
						},
						src: ['angular-app/css/**/*.css']
					}
			}
		},
		exec: {
			linkchecker: {
				cmd: 'linkchecker http://localhost:3000 -q --no-warnings'
			},
			protractor: {
				cmd: 'protractor angular-app/tests/protractor.conf.js'
			},
			karma: {
				cmd: './node_modules/karma/bin/karma start angular-app' +
					'/tests/karma.conf.js --single-run'
			},
			clear: {
				cmd: 'clear'
			},
			deleteBinFiles: {
				cmd: 'rm -R public/js; rm -R public/css;' + 
					'mkdir public/js public/css'
			}
		},
		uglify: {
			all: {
				files: {
					'public/js/app.js': angularFiles
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'public/css/app.css': ['angular-app/css/**/*.css']
				}
			},
			minify: {
				src: 'public/css/app.css',
				dest: 'public/css/app.css',
			},
		},
		/*lint_pattern: {
			conventions: {
				options: {
					rules: [
						{
							pattern: /(function|if|for|switch|while)\(/,
							message: 'Expected a space before parenthesis.'
						},
						{
							pattern: /,(?!\s)./,
							message: 'Expected a space after a comma.'
						},
						{
							pattern: /(?!\s).}/,
							message: 'Expected a space before closing bracket.'
						},
						{
							pattern: /\{(?!\s)./,
							message: 'Expected a space after opening bracket.'
						}
					]
				},
				files: {
					src: ['<% watch.lint.files %>']
				}
			}
		},*/
		hashres: {
			jsHash: {
				src: ['public/js/app.js'],
				dest: 'public/index.html'
			},
			cssHash: {
				src: ['public/css/app.css'],
				dest: 'public/index.html'
			}
		},
		watch: {
			options: {
				atBegin: true
			},
			bundle: {
				files: angularFiles.concat(['angular-app/css/**/*.css']),
				tasks: ['compile']
			},
			lint: {
				files: ['<%= jshint.server %>',
						'<%= jshint.api %>',
						'<%= jshint.frontend %>'],
				tasks: ['exec:clear', 'csslint', 'jshint'/*, 'lint_pattern'*/]
			}
		},
		nodemon: {
			options: {
				watch: ['server.js', 'server/**/*.js', 'api/**/*.js'],
				ignore: ['**/*.test.js'],
				nodeArgs: ['--debug'],
			},
			dev: {
				script: 'server.js'
			}
		}
	});

	// register tasks
	grunt.registerTask('test', ['jshint', 'cafemocha', 'exec:karma',
		'exec:protractor']);
	grunt.registerTask('compile', ['exec:deleteBinFiles', 'uglify', 'cssmin',
		'hashres']);
};
