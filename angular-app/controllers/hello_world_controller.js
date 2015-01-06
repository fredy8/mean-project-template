'use strict';

angular.module('app.helloworld', ['ngRoute', 'app.greeter'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/helloworld', {
		templateUrl: 'views/hello-world.html',
		controller: 'helloWorldCtrl'
	});
}])

.controller('helloWorldCtrl', ['$scope', 'Greeter',function ($scope, Greeter) {
	var data = Greeter.get(function () {
		$scope.greeting = data.greeting;
	});
}]);