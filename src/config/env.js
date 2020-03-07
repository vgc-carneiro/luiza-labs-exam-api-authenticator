const config = {
	app: {
		env: process.env.APP_ENV,
		port: process.env.APP_PORT,
		secret: process.env.SECRET
	}
};

module.exports = config;