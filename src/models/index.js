const Sequelize = require('sequelize');

const { postgres } = require('~/config/index');

const getCollectionProductModel = require('./collection_product');
const getCollectionModel = require('./collection');
const getProductCategoryModel = require('./product_category');
const getProductModel = require('./product');
const getUserModel = require('./users');
const getVerifyCodeModel = require('./verifyCode');
const getSessionModel = require('./session.model');

const sequelize = new Sequelize(
  postgres.db,
  postgres.username,
  postgres.password,
  postgres.options,
  // {
  //     host : process.env.DEV_MODE == 'true' ? process.env.POSTGRES_HOST_DEV : process.env.POSTGRES_HOST_PROD,
  //     dialect : "postgres",
  //     operatorAliases: false,

  //     pool : {
  //         max: 5,
  //         min: 0,
  //         acquire: 30000,
  //         idle: 10000
  //     }
  // },
);

const models = {
  Session: getSessionModel(sequelize, Sequelize),
  CollectionProduct: getCollectionProductModel(sequelize, Sequelize),
  Collection: getCollectionModel(sequelize, Sequelize),
  ProductCategory: getProductCategoryModel(sequelize, Sequelize),
  Product: getProductModel(sequelize, Sequelize),
  User: getUserModel(sequelize, Sequelize),
  VerifyCode: getVerifyCodeModel(sequelize, Sequelize),
};

module.exports = { sequelize, ...models };
