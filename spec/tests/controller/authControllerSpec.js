describe('authControllerSpec', () => {

	require('dotenv').config();

	const controller = require('../../../src/components/controller/authController');
	const service = require('../../../src/components/services/tokenService');

	beforeEach(() => {
		tokenDecrypted = {
			reference: 'systemOrigin',
			role: 'signer'
		}
	});

	describe('check controller',() => {
		it('decrypt token successfully', () => {
			spyOn(service, 'decodeJsonWebToken').and.returnValue(Promise.resolve('ok'));
			 controller.validateToken('token').then((result) => {
				 expect(result).toBe('ok');
			 }).catch((e)=> {
				 fail('Promise should not reject:',e);
			 });
		});
		it('decrypt token with reject on service', () => {
			spyOn(service, 'decodeJsonWebToken').and.returnValue(Promise.reject('not ok'));
			 controller.validateToken('token').then((result) => {
				fail('Promise should not resolve:',result);
			 }).catch((e)=> {
				expect(e).toEqual({status: 401, data: {message: 'not ok'}});
			 });
		});
		it('not send token', () => {
			controller.validateToken(null).then((result) => {
				fail('Promise should not resolve', result);
			}).catch((e) => {
				expect(e).toEqual({status: 404, data: {message: 'Token not found.'}});
			});
		});
	});
});