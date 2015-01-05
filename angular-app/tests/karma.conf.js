module.exports = function(config){
	config.set({
		basePath: '../..',

		files: [
			'public/bower_components/angular/angular.js',
			'public/bower_components/angular-route/angular-route.js',
			'public/bower_components/angular-mocks/angular-mocks.js',
			'public/js/*.js',
			'angular-app/tests/unit/**/*.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		plugins: [
					'karma-chrome-launcher',
					'karma-firefox-launcher',
					'karma-jasmine',
				 ]
	});
};