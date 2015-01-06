'use strict';

angular.module('app.greeter', ['ngRoute'])

.factory('Greeter', ['$resource', function ($resource) {
	return $resource('/api/greeting');
}]);