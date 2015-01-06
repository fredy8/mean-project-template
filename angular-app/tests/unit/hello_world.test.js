describe('app.helloworld module', function () {
	'use strict';

	beforeEach(module('app.helloworld'));

	var controller, scope, fakeGreeter;

	beforeEach(inject(function ($rootScope, $controller, $q) {
		fakeGreeter = {
			get: function (cb) {
				fakeGreeter.data = {};
				fakeGreeter.cb = cb;
				return fakeGreeter.data;
			},
			flush: function () {
				fakeGreeter.data.greeting = 'Hi!';
				fakeGreeter.cb();
			}
		};
		scope = $rootScope.$new();
		controller = $controller('helloWorldCtrl', {
			$scope: scope,
			Greeter: fakeGreeter
		});
	}));

	it('should define the controller', function () {
		expect(controller).toBeDefined();
	});

	describe('helloWorld controller', function () {

		it('should not define the greeting yet', function () {
			expect(scope.greeting).not.toBeDefined();
		});

		it('should set the scope greeting to the greeter result', function () {
			fakeGreeter.flush();
			expect(scope.greeting).toBe('Hi!');
		});

	});
	
});