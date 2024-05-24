const getProductCategory = (sequelize, { DataTypes }) => {
  const ProductCategory = sequelize.define('productcategories', {
    category: {
      type: DataTypes.ENUM(
        'Character',
        'Weapon',
        'Pistol',
        'SMG',
        'Rifle',
        'Sniper',
        'Vehicle',
        'Motorcycle',
        'Car',
        'Buggy',
        'Humvee',
        'Parachute',
      ),
    },
    parent_product_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  ProductCategory.belongsTo(ProductCategory, {
    foreignKey: 'parent_product_category_id',
  });
  return ProductCategory;
};
module.exports = getProductCategory;
