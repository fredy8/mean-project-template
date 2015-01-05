describe('app', function () {
	'use strict';

	browser.get('index.html');

	it('should automatically redirect to /helloworld', function () {
		expect(browser.getLocationAbsUrl()).toMatch('/helloworld');
	});

	describe('helloworld', function () {

		beforeEach(function () {
			browser.get('index.html#/helloworld');
		});

		it('should display Hello World when user navigates to /helloworld',
			function () {
				expect(element.all(by.css('[ng-view] p')).first().getText()).
					toMatch(/Hello World/);
			}
		);
	});

});
