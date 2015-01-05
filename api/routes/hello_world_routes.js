var router = require('express').Router();

var helloWorldController = require('../controllers/hello_world_controller');

router.use(function (req, res) {
	res.send(helloWorldController.getHelloWorld());
});

module.exports = router;