'use strict'

exports = module.exports = {
  createDecorator: function(method) {
  	let that = this
  	return function (route) {
  		function decorator(obj, key, descriptor) {
  			if (!that.isObject(obj['__' + method + '__']))
  				obj['__' + method + '__'] = {}
		    obj['__' + method + '__'][route] = obj[key].bind(obj)
		  }
		  return decorator
  	}
  },
  isObject: function (obj) {
  	return Object.prototype.toString.call(obj) === '[object Object]'
  }
}