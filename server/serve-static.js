var express = require('express'),
	path = require('path');

module.exports = function (app) {

	app.use(express.static(path.join(__dirname, '../public/js'),
		{ maxAge: '1d' }));
	app.use(express.static(path.join(__dirname, '../public')));
	app.use(express.static(path.join(__dirname, '../angular-app/js/app'), {
		extensions: '.ptl.html'
	}));
}