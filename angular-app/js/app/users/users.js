'use strict';

angular.module('app.users', [
	'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/usuarios', {
		templateUrl: 'users/users.ptl.html',
		controller: 'usersCtrl'
	});
}])
.controller('usersCtrl', ['$scope', function ($scope) {
	
}]);