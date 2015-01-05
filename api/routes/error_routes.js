var router = require('express').Router();

// Error Handlers
// 404
router.use(function (req, res, next) {
	res.status(404);
	res.json({ success: false, err: '404 - Not found.' });
});

// 403 (Csurf token tampered)
router.use(function (err, req, res, next) {
	if (err.code !== 'EBADCSRFTOKEN') {
		return next(err);
	}

	res.status(403);
	res.json({ success: false, err: '403 - Session has expired.' });
});

// 500
router.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.json({ success: false, err: '500 - Internal server error.' });
});

module.exports = router;