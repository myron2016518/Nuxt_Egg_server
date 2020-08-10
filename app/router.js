'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // require('./router/user')(app);
  router.resources('user', '/user', controller.user);
};

