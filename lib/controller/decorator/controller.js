'use strict'

function ControllerDecorators(name) {
  return function(target) {
    if(name)
      target.prototype.__NAME__ = name
    else
      target.prototype.__NAME__ = '/'
  }
}

exports = module.exports = ControllerDecorators