const collectionCtrls = require('~/controllers/collection.controller');
/**
 * @type { Routes.default }
 */
module.exports = {
  prefix: '/collection',
  routes: [
    {
      path: '/getCollections',
      methods: {
        /**
         * @openapi
         *  /collection/getCollections:
         *    get:
         *      description: Get available collections with overrides
         *      tags:
         *      - Collection
         *      responses:
         *        200:
         *          description: Successful response
         *          content:
         *            application/json:
         *              example:
         *                success: true
         *                collections:
         *                  - name: 'Kira Genesis'
         *                    type: 'character'
         *                    description: 'Kira Genesis collection designed by world renowned artists Antoni and Marc Tudisco.'
         *                    image: 'https://arweave.net/399YyKyRwMuKH6wBKJMqSFd8FhKJ1JctrlCHv5Zeqvo/genesis.png'
         *                    token_address: '0xe2c921ed59f5a4011b4ffc6a4747015dcb5b804f'
         *                    metadata_url: 'https://arweave.net/FmIlEzGyaZSt_05B4jsS5ZwIybVi1vrJVNnhq4NbzP0/genesis_metadata'
         *        401:
         *          $ref: '#/components/responses/401'
         *        404:
         *          $ref: '#/components/responses/404'
         */
        get: {
          middlewares: [collectionCtrls.getCollections],
        },
      },
    },
    {
      path: '/addCollection',
      exclude: true,
      methods: {
        post: {
          middlewares: [collectionCtrls.addCollection],
        },
      },
    },
    {
      path: '/updateCollection',
      exclude: true,
      methods: {
        post: {
          middlewares: [collectionCtrls.updateCollection],
        },
      },
    },
    {
      path: '/deleteCollection',
      exclude: true,
      methods: {
        post: {
          middlewares: [collectionCtrls.deleteCollection],
        },
      },
    },
  ],
};
