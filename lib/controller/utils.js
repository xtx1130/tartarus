'use strict'

const fs = require('fs')
const path = require('path')

exports = module.exports = {
  // TO DO: 这里只寻找./controller下面的文件
  // 还需要加上寻找某个文件夹下面所有./controller下的文件
  readFiles: function (pwd) {
    let fileList = []
    (function read() {
      let paths = fs.readdirSync(pwd)
      paths.forEach((el) => {
        let p = path.join(pwd, el)
        let info = fs.statSync(p)
          if(info.isDirectory()){
            read(p)
          } else if(/\.js/.test(p)){
            fileList.push(p)
          }
      })
    })()
    return fileList
  },
  delSlash: function(uri) {
    return uri.replace(/^(\/.*)\/$/, (q,s) => s)
  }
}