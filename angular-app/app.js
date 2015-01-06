'use strict';

angular.module('app', [
	'ngRoute',
	'ngResource',
	'app.greeter',
	'app.helloworld'
])
.config(['$routeProvider', '$resourceProvider',
	function ($routeProvider, $resourceProvider) {
	$routeProvider.otherwise({ redirectTo: '/helloworld' });
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);
