describe('app.api module', function () {
	'use strict';

	beforeEach(module('app.api'));

	var $httpBackend, api;

	beforeEach(inject(function (_$httpBackend_, _api_) {
		$httpBackend = _$httpBackend_;
		api = _api_;
		$httpBackend.when('GET', '/api/helloworld')
		.respond({ greeting: 'hello' });
	}));

	it('define a factory', function () {
		expect(api).toBeDefined();
	});

	describe('api factory', function () {

		it('should contain a getGreeting function', function () {
			expect(api.getGreeting).toBeDefined();
		});

		it('should call the api', function () {
			$httpBackend.expectGET('/api/helloworld');
			api.getGreeting();
			$httpBackend.flush();
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should a promise that returns the GET results', function () {
			api.getGreeting().success(function(data, status) {
				expect(data).toBeDefined();
				expect(status).toEqual(200);
				expect(data.greeting).toEqual('hello');
			});
			$httpBackend.flush();
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should return an error object', function () {
			$httpBackend.when('GET', '/getGreeting')
			.respond(404, { error: 'Not Found.' });
			api.getGreeting()
			.success(function () {})
			.error(function (err, status) {
				expect(status).toEqual(404);
				expect(err).toBeDefined();
				expect(err.error).toEqual('Not Found.');
			});

			$httpBackend.flush();
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

	});
	
});