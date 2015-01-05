describe('Hello World controller tests', function () {
	'use strict';

	var helloWorld = require('../../controllers/hello_world_controller.js');
	var expect = require('chai').expect;

	describe('getHelloWorld()', function () {
		it('should return a helloWorld object', function () {
			expect(helloWorld.getHelloWorld()).to.deep.equal({
				greeting: 'Hello World'
			});
		});
	});
	
});