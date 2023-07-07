const Logger = require('./logger') 

const logger = new Logger();

logger.on('message', data => console.log('Called listner', data))

logger.log('Renu is gig')