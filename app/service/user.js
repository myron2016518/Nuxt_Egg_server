'use strict';

const {Service} = require('egg')

class User extends Service {
  async list() {
    return this.ctx.model.User.findAndCountAll();
  }

  async create(user) {
    return this.ctx.model.User.create(user);
  }
 
}

module.exports = User