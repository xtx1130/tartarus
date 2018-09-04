'use strict'

const path = require('path')
let config
try {
  config = require(path.join(process.cwd(), 'tartarus.config'))
  if(!config.controllerPath) {
    config.controllerPath = './controller'
  } else {
    fs.statSync(path.join(process.cwd(), config.controllerPath))
  }
} catch (e) {
  config.controllerPath = './controller'
}

exports = module.exports = config