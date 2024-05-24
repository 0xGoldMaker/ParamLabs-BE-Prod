const schemas = require('~/schemas/index');
const nftController = require('~/controllers/nft.controller');
const { validate } = require('~/lib/ajv');
/**
 * @type { Routes.default }
 */
module.exports = {
  prefix: '/nft',
  exclude: true,
  routes: [
    {
      path: '/getIMXProductsByEmail',
      methods: {
        post: {
          middlewares: [validate(schemas.getUserByEmail), nftController.getIMXProductsByEmail],
        },
      },
    },
    {
      path: '/getProductsByEmail',
      methods: {
        post: {
          middlewares: [validate(schemas.getUserByEmail), nftController.getProductsByEmail],
        },
      },
    },
    {
      path: '/walletHasKiraNft',
      methods: {
        post: {
          middlewares: [validate(schemas.walletHasKiraNft), nftController.walletHasKiraNft],
        },
      },
    },
  ],
};
