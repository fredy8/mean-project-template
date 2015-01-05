var router = require('express').Router();

router.use(require('./hello_world_routes'));
router.use(require('./error_routes'));

module.exports = router;