'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('./config')

class Controller {
  constructor() {
    let controllerList = utils.readFiles(path.join(process.cwd(), config.controllerPath))
  }
}