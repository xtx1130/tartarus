'use strict'

const Koa = require('koa')
const KoaRouter = require('koa-router')
const router = require('./router/router')
const controller = require('./controller/controller')
const BaseController = controller.BaseController

const koa = new Koa()
const koaRouter = new KoaRouter()
const controller = new BaseController()

exports = module.exports = {
  router,
  controller
}