'use strict'

exports = module.exports = {
  createDecorator: function(objMap) {
  	return function (route) {
  		function decorator(obj, key, descriptor) {
		    objMap[route] = obj
		  }
		  return decorator
  	}
  }
}