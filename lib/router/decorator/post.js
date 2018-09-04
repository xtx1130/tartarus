'use strict'

const postMap = {}

function RouterDecorator(route) {
  function decorator(obj, key, descriptor) {
    postMap[route] = obj
  }
  return decorator
}

exports = module.exports = {
  PostDecorator: RouterDecorator,
  postMap: postMap
}