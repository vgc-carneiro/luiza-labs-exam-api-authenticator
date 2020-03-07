const log = require('log4js').getLogger('authController');
const tokenService = require('../services/tokenService');

function validateToken(token) {
	return new Promise((resolve, reject) => {
		if(!token){
			log.info('validateToken - Token not found.');
			reject({status: 404, data: {message: 'Token not found.'}});
		}else{
			tokenService.decodeJsonWebToken(token).then((result) => {
				resolve(result);
			}).catch((e) => {
				reject({status: 401, data: {message: e}});
			});
		}
	});
}

module.exports = {validateToken};