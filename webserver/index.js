const conf = require('ocore/conf.js');
const fastify = require('fastify');
const CORS = require('fastify-cors');
const fastifySensible = require('fastify-sensible');

const marketsController = require('./controllers/marketsController.js');
const reserveAssetsController = require('./controllers/reserveAssetsController.js');
const dailyCandlesController = require('./controllers/dailyCandlesController.js');
const sportCalendarController = require('./controllers/sportCalendarController.js');
const championshipsController = require('./controllers/championshipsController.js');
const sportTeamController = require('./controllers/sportTeamController.js');
const currencyCalendarController = require('./controllers/currencyCalendarController.js');
const popularCurrenciesController = require('./controllers/popularCurrenciesController.js');
const datesController = require('./controllers/datesController.js');
const ogImageController = require('./controllers/ogImageController.js');
const indexController = require('./controllers/indexController.js');

// Create instance
const fastifyInstance = fastify({ logger: false });

// CORS
fastifyInstance.register(CORS);

// register error generator
fastifyInstance.register(fastifySensible);

// Declare routes
fastifyInstance.get('/api/markets/:page?', marketsController);
fastifyInstance.get('/api/reserve_assets', reserveAssetsController);
fastifyInstance.get('/api/daily_closes/:address', dailyCandlesController);
fastifyInstance.get('/api/calendar/currency/:currency/:page', currencyCalendarController);
fastifyInstance.get('/api/calendar/:sport/:championship/:page', sportCalendarController);
fastifyInstance.get('/api/championships/:sport?', championshipsController);
fastifyInstance.get('/api/popular_oracle_pairs', popularCurrenciesController);
fastifyInstance.get('/api/team/:sport/:abbreviation', sportTeamController);
fastifyInstance.get('/api/dates/:address', datesController);
fastifyInstance.get('/api/og_images/:type/:address?', ogImageController)
// fastifyInstance.get('*', )
fastify.setNotFoundHandler(indexController)
// Run the server
exports.start = async () => {
  try {
    await fastifyInstance.listen(conf.webserverPort);
  } catch (err) {
    fastifyInstance.log.error(err);
    console.error(err)
    process.exit(1);
  }
}