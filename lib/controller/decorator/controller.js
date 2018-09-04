'use strict'

function ControllerDecorators(name) {
  return function(target) {
    if(name)
      target.prototype.name = name
    else
      target.prototype.name = '/'
  }
}

exports = module.exports = ControllerDecorators