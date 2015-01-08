'use strict';

angular.module('app.sidebar', [
	'ngRoute'
])
.controller('sidebarCtrl', ['$scope', '$location',
	function ($scope, $location) {
		$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
]);