require('module-alias/register');

const { suiteSetup, suiteTeardown } = require('mocha');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.env.DEBUG = '';
process.env.NODE_ENV = 'test';

dotenv.config({
  path: './.env/.common.env',
});

dotenv.config({
  path: './.env/.test.env',
});

const { mongodb } = require('~/config/index');
const { sequelize } = require('~/models/index');

let dataBase;

suiteSetup(async () => {
  await sequelize.sync();

  mongoose.set('debug', mongodb.debug);
  mongoose.set('strictQuery', true);

  await mongoose.connect(mongodb.url, mongodb.options);
  dataBase = mongoose.connection.db;

  const collections = await dataBase.collections();
  await Promise.all(collections.map((collection) => collection.deleteMany()));
});

suiteTeardown((done) => {
  dataBase.dropDatabase((err) => {
    if (err) {
      console.error('error', err);
    } else {
      console.info('Successfully dropped db: ', dataBase.databaseName);
    }

    mongoose.connection.close((e) => {
      if (e) {
        console.info('Error disconnecting from database');
        console.info(e);
      }

      return done();
    });
  });
});
