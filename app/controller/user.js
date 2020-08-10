'use strict'; 

const { Controller } = require('egg'); 
// TestController
class UserController extends Controller { 
  
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.list();
  }
  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }
} 
  
module.exports =  UserController; 