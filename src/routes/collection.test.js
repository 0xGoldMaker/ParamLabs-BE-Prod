const request = require('supertest');
const { it, before, describe } = require('mocha');
const { expect } = require('chai');

// const { UseCollectionr } = require('~/models/index');

const { apiPrefix } = require('~/config/index');
const { start } = require('~/lib/app');

let app;
let agent;

describe('[Collection]', () => {
  before(async () => {
    app = await start();
    agent = request.agent(app);
  });

  describe('Get All Collection Data', () => {
    it('should success', async () => {
      const res = await agent.get(`${apiPrefix}/collection/getCollections`).expect(200);
      const { success, collections } = res.body;
      expect(success).to.eq(true);
      expect(collections).to.deep.equal([
        {
          name: 'Kira Genesis',
          description: 'Kira Genesis Collection',
          image: 'https://arweave.net/399YyKyRwMuKH6wBKJMqSFd8FhKJ1JctrlCHv5Zeqvo/genesis.png',
          token_address: '0xe2c921ed59f5a4011b4ffc6a4747015dcb5b804f',
          type: 'character',
        },
      ]);
    });
  });
});
