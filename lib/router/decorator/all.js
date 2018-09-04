'use strict'

const utils = require('../utils')
const getMap = require('./get').getMap
const postMap = require('./post').postMap

function RouterDecorator(route) {
  function decorator(obj, key, descriptor) {
    getMap[route] = obj
    postMap[route] = obj
  }
  return decorator
}

exports = module.exports = RouterDecorator