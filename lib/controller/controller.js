'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('./config')
const assert = require('assert')
const ControllerDecorator = require('./decorator/controller')

const routeForAll = Symbol.for('controller#router')

class BaseController {
  constructor() {
    let controllerList = utils.readFiles(path.join(process.cwd(), config.controllerPath))
    this.controller = []
    this[routeForAll] = {}
    for(let i = 0; i < controllerList.length; i ++) {
      let TemController = require(controllerList[i])
      this.controller.push(new TemController)
    }
  }
  get routeMap() {
    for(let i = 0; i < this.controller.length; i++) {
      let control = this.controller[i] 
      const baseRouter = utils.delSlash(control.__NAME__)
      assert(typeof this[routeForAll][baseRouter] === 'object', `controller ${baseRouter} has already exists`)
      this[routeForAll][baseRouter] = this.controller[i] 
    }
    return this[routeForAll]
  }
}

exports = module.exports = {
  BaseController,
  ControllerDecorator
}