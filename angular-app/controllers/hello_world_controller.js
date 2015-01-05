'use strict';

angular.module('app.helloworld', ['ngRoute', 'app.api'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/helloworld', {
		templateUrl: 'views/hello-world.html',
		controller: 'helloWorldCtrl'
	});
}])

.controller('helloWorldCtrl', ['$scope', 'api', function ($scope, api) {
	api.getGreeting()
	.success(function (data) {
		$scope.greeting = data.greeting;
	}).error(function (err) {
		$scope.greeting = 'Error :(';
	});
}]);