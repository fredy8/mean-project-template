'use strict';

angular.module('app.projects', [
	'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/proyectos', {
		templateUrl: 'projects/projects.ptl.html',
		controller: 'projectsCtrl'
	});
}])
.controller('projectsCtrl', ['$scope', function ($scope) {
	$scope.projects = [
		{
			'name': 'Proyecto ejemplo 1',
			'stage': 'Levantamiento',
			'status': 'Activo',
			'amount': 114234,
			'inCharge': 'Roel'
		},
		{
			'name': 'Proyecto ejemplo 2',
			'stage': 'Ejecución',
			'status': 'Activo',
			'amount': 51102,
			'inCharge': 'Ricky'
		},
		{
			'name': 'Proyecto ejemplo 3',
			'stage': 'Facturación',
			'status': 'Activo',
			'amount': 91234,
			'inCharge': 'Adrián'
		}
	];
}]);