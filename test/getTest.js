'use strict'

const Get = require('../lib/app').router.Get
const Controller = require('../lib/app').controller.ControllerDecorator

@Controller('xtx')
class Test {
    @Get('t')
    testcase() {
        return this.bundle()
    }
    bundle() {
        return 123
    }
}
console.log(Test.prototype.__GET__)
let test = new Test()