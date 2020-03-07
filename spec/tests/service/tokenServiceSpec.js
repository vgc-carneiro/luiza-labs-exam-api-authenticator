describe('tokenServiceSpec', () => {

	require('dotenv').config();

	const service = require('../../../src/components/services/tokenService');
	const config = require('../../../src/config/env');
	const jwt = require('jsonwebtoken');

	beforeEach(() => {
		tokenDecrypted = {
			reference: 'systemOrigin',
			role: 'signer'
		}
	});

	describe('check decrypt token',() => {
		it('decrypt token successfully', () => {
			service.decodeJsonWebToken(jwt.sign(tokenDecrypted, config.app.secret)).then((result) => {
				expect(result.reference).toBe(tokenDecrypted.reference);
				expect(result.role).toBe(tokenDecrypted.role);
			}).catch((e) => {
				fail('Promise should not reject: ', e);
			});
		});
		it('pass token null', () => {
			service.decodeJsonWebToken(null).then((result) => {
				fail('Promise should not resolve');
			}).catch((e) => {
				expect(e).toBe('Token not found.');
			});
		});
		it('pass token with wrong secret', () => {
			service.decodeJsonWebToken(jwt.sign(tokenDecrypted, 'lalalala')).then((result) => {
				fail('Promise should not resolve');
			}).catch((e) => {
				expect(e).toBe('invalid signature');
			});
		});
	});
});