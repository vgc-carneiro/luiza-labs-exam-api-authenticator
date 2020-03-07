require('./config/log');
const log = require('log4js').getLogger('app');

function start(){
	log.info('App started successfully');
}
start();