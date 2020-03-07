const router = require('express').Router();
const log = require('log4js').getLogger('authRoute');
const controller = require('../controller/authController');

router.get('/test', function(req, res) {
	res.status(200).json({teste: 'ok'});
});

router.get('/:token', function(req, res) {
	log.info('/', req.params);
	controller.validateToken(req.params.token).then(result => {
		res.status(200).send(JSON.stringify(result));
	}, e => {
		log.error('GET: /',e);
		res.status(e.status).send(e.data);
	});
});

module.exports = router;
