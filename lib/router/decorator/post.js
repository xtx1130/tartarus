'use strict'

const utils = require('../utils')
const postMap = {}

exports = module.exports = {
  PostDecorator: utils.createDecorator(postMap),
  postMap: postMap
}