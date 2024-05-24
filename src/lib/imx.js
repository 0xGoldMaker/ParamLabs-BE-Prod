/**
 * @type {import('node_modules/axios/index').AxiosInstance}
 */
const axios = require('axios');
const {
  imx: { baseUrl },
} = require('~/config/index');
const collections = require('~/assets/collections.json');

exports.getCollections = async () => {
  const ids = collections
    .map((col) => col.token_address)
    .filter((id, index, arr) => arr.lastIndexOf(id) !== index);
  const { status, data } = await axios.get(`${baseUrl}/v1/collections?whitelist=${ids.join(',')}`);

  if (status !== 200) {
    throw new Error('Unable to fetch collections');
  }

  const { result } = data;

  return collections.map((current) => {
    const { name, description, collection_image_url } =
      result.find((col) => col.address === current.token_address) || {};

    return {
      name,
      description,
      image: collection_image_url,
      ...current,
    };
  });
};
