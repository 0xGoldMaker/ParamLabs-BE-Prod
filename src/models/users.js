const log = require('debug')('app:models:user');
const bcrypt = require('bcryptjs');
const { ROLES } = require('~/utils/constants');

/**
 * Get the model
 * @param {import("sequelize").Sequelize} sequelize sequelize instance
 * @param {{ DataTypes: import("sequelize").DataTypes }} options sequelize options
 * @returns {import("sequelize").Model}
 */
const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: { type: DataTypes.STRING },
      active: { type: DataTypes.BOOLEAN, defaultValue: false },
      roles: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM({
            values: [ROLES.ADMIN, ROLES.USER, ROLES.NFT],
          }),
        ),
        defaultValue: [ROLES.USER],
      },
      wallet_status: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.getDataValue('eth_key') ? 'CONNECTED' : 'NOT_CONNECTED';
        },
      },
      wallet_provider: {
        type: DataTypes.ENUM('metamask', 'gamestop', 'other'),
        defaultValue: 'metamask',
      },
      eth_network: { type: DataTypes.STRING },
      eth_key: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      hooks: {
        beforeSave: async (user) => {
          const u = user;
          u.email = (u.email || '').toLowerCase();
          if (!user.password) return;
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(user.password, salt);
          u.password = hash;
        },
      },
      defaultScope: {
        attributes: {
          exclude: ['password'],
        },
      },
      scopes: {
        withPassword: {
          attributes: {
            include: ['password'],
          },
        },
      },
    },
  );

  User.prototype.correctPassword = async (inputPassword, userPassword) =>
    bcrypt.compare(inputPassword, userPassword);

  User.prototype.correct = () => {
    log('correct');
  };

  return User;
};

module.exports = getUserModel;
