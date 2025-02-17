require('module-alias/register');
const mongoose = require('mongoose');
const { randomBytes } = require('node:crypto');

const { signToken } = require('~/utils/utils');
const { mongodb } = require('~/config/index');
const { sequelize, User } = require('~/models/index');

let adminId = process.env.ADMIN_ID;

(async () => {
  await sequelize.sync();

  mongoose.set('debug', mongodb.debug);
  mongoose.set('strictQuery', true);

  await mongoose.connect(mongodb.url, mongodb.options);

  if (!adminId) {
    const password = randomBytes(24).toString('hex');
    const [admin, created] = await User.findOrCreate({
      where: { email: 'admin@paramlabs.io' },
      defaults: {
        name: 'ParamLabs Admin',
        email: 'admin@paramlabs.io',
        password,
        active: true,
        roles: ['ADMIN', 'USER'],
      },
    });

    if (created) {
      console.info(`Admin created
Email     : ${admin.email}
Password  : ${password}
`);
    }

    adminId = admin.id;
  }

  const token = await signToken(
    adminId,
    {
      exp: 4073583600, // 01/01/2099
    },
    'DO NOT REMOVE! Token used from Kiraverse Backend',
  );

  console.info(token);

  process.exit(0);
})();
