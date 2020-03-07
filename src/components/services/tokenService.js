const log = require('log4js').getLogger('tokenService.js');
const config = require('../../config/env');
const jwt = require('jsonwebtoken');

function decodeJsonWebToken(token) {
	return new Promise((resolve, reject) => {
		if(!token){
			reject('Token not found.');
		}else{
			jwt.verify(token, config.app.secret, (e, decoded) => {
				if(e){
					log.error('decodeJsonWebToken.verify:', e.message);
					reject(e.message);
				}else{
					resolve(decoded);
				}
			});
		}
	});
}

module.exports = {decodeJsonWebToken};