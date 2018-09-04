'use strict'

const Get = require('../lib/app').router.GetDecorator
const getMap = require('../lib/app').router.getMap
const Controller = require('../lib/app').controller.ControllerDecorator

@Controller('xtx')
class Test {
    @Get('t')
    test() {
        return this.bundle()
    }
    bundle() {
        return 123
    }
}
console.log(Test._name)
let test = new Test()

console.log(getMap)