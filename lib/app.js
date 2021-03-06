'use strict'

const Koa = require('koa')
const KoaRouter = require('koa-router')
const router = require('./router/router')
const controller = require('./controller/controller')
const BaseController = controller.BaseController

let initRoute = Symbol.for('private#initRoute')

class Application extends Koa {
  constructor () {
    super()
    this.route = new KoaRouter()
    this.controller = new BaseController()
    this.routeMap = controller.routeMap()
    init()
  }
  init() {

  }
  [initRoute]() {

  }
  listen(...args) {
    return super.listen(...args)
  }
}

exports = module.exports = {
  router,
  controller
}