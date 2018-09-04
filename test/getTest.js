'use strict'

const Get = require('../lib/app').GetDecorator
const getMap = require('../lib/app').getMap

class Test {
    @Get('t')
    test() {
        return this.bundle()
    }
    bundle() {
        return 123
    }
}

let test = new Test()

console.log(getMap)