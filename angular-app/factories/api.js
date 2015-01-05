'use strict';

angular.module('app.api', ['ngRoute'])

.factory('api', ['$http', function ($http) {
	var api = {};

	api.getGreeting = function () {
		return $http.get('/api/helloworld');
	};

	return api;
}]);