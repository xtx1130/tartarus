'use strict'

function ControllerDecorators(name) {
  return function(target) {
    if(name)
      target._name = name
    else
      target._name = '/'
  }
}

exports = module.exports = ControllerDecorators