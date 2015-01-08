var router = require('express').Router();

var helloWorldController = require('../controllers/hello_world_controller');

router.get('/greeting', helloWorldController.getHelloWorld());

module.exports = router;