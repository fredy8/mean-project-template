describe('app.greeter module', function () {
	'use strict';

	beforeEach(module('app.greeter'));
	beforeEach(module('ngResource'));

	var $httpBackend, Greeter;

	beforeEach(inject(function (_$httpBackend_, $resource) {
		$httpBackend = _$httpBackend_;
		Greeter = $resource('/api/greeting');
		$httpBackend.when('GET', '/api/greeting')
		.respond({ greeting: 'hello' });
	}));

	it('define a factory', function () {
		expect(Greeter).toBeDefined();
	});

	describe('Greeter factory', function () {

		beforeEach(inject(function ($httpBackend) {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		}));

		it('should call the api', function () {
			$httpBackend.expectGET('/api/greeting');
			Greeter.get();
			$httpBackend.flush();
		});

		it('should return a greeting', function () {
			var data = Greeter.get(function () {
				expect(data.greeting).toEqual('hello');
			});
			$httpBackend.flush();
		});

	});
	
});