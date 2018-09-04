'use strict'

const getMap = {}

function RouterDecorator(route) {
  function decorator(obj, key, descriptor) {
    getMap[route] = obj
  }
  return decorator
}

exports = module.exports = {
  GetDecorator: RouterDecorator,
  getMap: getMap
}