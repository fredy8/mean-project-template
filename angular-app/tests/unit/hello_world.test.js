describe('app.helloworld module', function () {
	'use strict';

	beforeEach(module('app.helloworld'));
	beforeEach(module('app.api'));

	var controller, scope, fakeApi, data;

	beforeEach(inject(function ($rootScope, $controller, $q) {
		fakeApi = {
			getGreeting: function () {
				return {
					success: function (successCb) {
						fakeApi.success = successCb;
						return {
							error: function (errorCb) {
								fakeApi.error = errorCb;
							}
						};
					}
				};
			}
		};
		scope = $rootScope.$new();
		data = { greeting: 'Hi!' };
		controller = $controller('helloWorldCtrl', {
			$scope: scope,
			api: fakeApi
		});
	}));

	it('define the controller', function () {
		expect(controller).toBeDefined();
	});

	describe('helloWorld controller', function () {

		it('should not define the greeting yet', function () {
			expect(scope.greeting).not.toBeDefined();
		});

		it('should define the greeting', function () {
			fakeApi.success(data);
			expect(scope.greeting).toBeDefined();
		});

		it('should set the greeting to the api result', function () {
			fakeApi.success(data);
			expect(scope.greeting).toBe(data.greeting);
		});

		it('should set the greeting to an error message', function () {
			fakeApi.error();
			expect(scope.greeting).toBe('Error :(');
		});

	});
	
});