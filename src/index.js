const log = require('debug')('app:index');
const pkg = require('../package.json');

const {
  port: PORT,
  host: HOST,
  publicUrl,
  apiPrefix,
  mongodb,
  postgres,
} = require('./config/index');
const { start } = require('./lib/app');

(async () => {
  const app = await start();

  app.listen(PORT, HOST, () => {
    log('Env               : %s', process.env.NODE_ENV);
    log('App               : %s', pkg.name);
    log('Version           : %s', pkg.version);
    log('MONGODB           : %s', mongodb.url);
    log(
      'POSTGRES          : postgres://%s:%s@%s:%d/%s',
      postgres.username,
      postgres.password,
      postgres.options.host,
      postgres.options.port,
      postgres.db,
    );
    log('Server started at : %s%s', publicUrl, apiPrefix);
  });
})();
