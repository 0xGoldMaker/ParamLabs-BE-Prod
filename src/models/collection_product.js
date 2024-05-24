const Product = require('./product');
const Collection = require('./collection');

const getCollectionProduct = (sequelize, { DataTypes }) => {
  const CollectionProduct = sequelize.define('collectionproducts', {
    collection_id: { type: DataTypes.INTEGER },
    product_id: { type: DataTypes.INTEGER },
    position: { type: DataTypes.INTEGER },
  });

  CollectionProduct.associate = () => {
    CollectionProduct.belongsTo(Product, {
      foreignKey: 'product_id',
    });

    CollectionProduct.belongsTo(Collection, {
      foreignKey: 'collection_id',
    });
  };

  return CollectionProduct;
};
module.exports = getCollectionProduct;
