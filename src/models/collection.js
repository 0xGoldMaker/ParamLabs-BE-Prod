const getCollectionData = (sequelize, { DataTypes }) => {
  const CollectionData = sequelize.define(
    'collection',
    {
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      token_address: { type: DataTypes.STRING },
      metadata_url: { type: DataTypes.STRING },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    },
  );

  return CollectionData;
};
module.exports = getCollectionData;
