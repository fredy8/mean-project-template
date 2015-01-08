'use strict';

angular.module('app.reports', [
	'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/reportes', {
		templateUrl: 'reports/reports.ptl.html',
		controller: 'reportsCtrl'
	});
}])
.controller('reportsCtrl', ['$scope', function ($scope) {

}]);