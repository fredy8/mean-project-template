describe('Hello World API', function () {
	'use strict';

	var assert = require('chai').assert;
	var rest = require('restler');

	this.timeout(5000);
	
	var base = 'http://localhost:3000/api';

	it('should return hello world greeting', function (done) {
		rest.get(base + '/helloworld').on('success', function (data) {
			assert.equal(data.greeting, 'Hello World');
			done();
		});
	});
});
