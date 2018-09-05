'use strict'

function ControllerDecorators(name) {
  return function(target) {
    if(name)
      target.prototype.__name__ = name
    else
      target.prototype.___name__ = '/'
  }
}

exports = module.exports = ControllerDecorators