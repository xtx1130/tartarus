'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('./config')

class BaseController {
  constructor() {
    let this.control = {}
    let controllerList = utils.readFiles(path.join(process.cwd(), config.controllerPath))
    for(let i = 0; i < controllerList.length; i++) {
      let SingleController = require(controllerList[i])
      let sc = new SingleController()
      this.control[sc.name] = sc
    }
  }
}

exports = module.exports = BaseController