exports.getHelloWorld = function () {
	var greeting = { greeting: 'Hello World' };
	return function (req, res) {
		res.send(greeting);
	}
};