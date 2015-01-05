'use strict';

angular.module('app', [
	'ngRoute',
	'app.helloworld',
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/helloworld' });
}]);
