const Collection = require('./collection');
const ProductCategory = require('./product_category');

const getProductModel = (sequelize, { DataTypes }) => {
  const Product = sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metadata_url: { type: DataTypes.STRING },
    enabled: { type: DataTypes.BOOLEAN },
    image_link: { type: DataTypes.STRING },
    product_description: { type: DataTypes.STRING },
    collection_id: { type: DataTypes.INTEGER },
    product_category_id: { type: DataTypes.INTEGER },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING) },
    featured: { type: DataTypes.BOOLEAN },
    featured_rule: { type: DataTypes.STRING },
    featured_duration: { type: DataTypes.FLOAT },
  });

  Product.associate = () => {
    Product.belongsTo(Collection, {
      foreignKey: 'collection_id',
    });
  };

  Product.associate = () => {
    Product.belongsTo(ProductCategory, {
      foreignKey: 'product_category_id',
    });
  };

  return Product;
};

module.exports = getProductModel;
