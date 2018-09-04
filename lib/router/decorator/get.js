'use strict'

const utils = require('../utils')
const getMap = {}

exports = module.exports = {
  GetDecorator: utils.createDecorator(getMap),
  getMap: getMap
}