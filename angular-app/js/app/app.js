'use strict';

angular.module('app', [
	'ngRoute',
	'app.projects',
	'app.reports',
	'app.users',
	'app.sidebar'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/proyectos' });
}]);