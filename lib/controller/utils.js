'use strict'

const fs = require('fs')
const path = require('path')

exports = module.exports = {
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
  }
}