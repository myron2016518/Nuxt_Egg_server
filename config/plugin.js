'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  redis: {
    enable: false,
    package: 'egg-redis',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: false,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
