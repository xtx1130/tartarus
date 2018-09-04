'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('./config')

class BaseController {
  constructor() {
    this.controllerList = utils.readFiles(path.join(process.cwd(), config.controllerPath))
  }
}

exports = module.exports = BaseController