//import device from '@system.device';
//import {Core} from 'deccjsunit/lite'
//const core = Core.getInstance()
//core.init()
//require('../../../test/List.test.js')
//core.execute()
//
//export default {
//    data: {
//        title: "Test"
//    },
//    onInit() {
//        this.title = this.$t('strings.world');
//        console.log("napi test for app");
//    }
//}

import file from '@system.file'
import app from '@system.app'
import device from '@system.device'
import router from '@system.router'
import {Core, ExpectExtend, ReportExtend} from 'deccjsunit/index'

export default {
//    data: {
//        title: ""
//    },
    onInit() {
//        this.title = this.$t('strings.world');
    },
    onShow() {
//        console.info('onShow finish')
//        const core = Core.getInstance()
//        const expectExtend = new ExpectExtend({
//            'id': 'extend'
//        })
//        const reportExtend = new ReportExtend(file)
//        //        const instrumentLog = new InstrumentLog({
//        //            'id': 'report'
//        //        })
//        core.addService('expect', expectExtend)
//        core.addService('report', reportExtend)
//        //        core.addService('report', instrumentLog)
//        core.init()
//        //        core.subscribeEvent('spec', instrumentLog)
//        //        core.subscribeEvent('suite', instrumentLog)
//        //        core.subscribeEvent('task', instrumentLog)
//
//        const configService = core.getDefaultService('config')
//        configService.setConfig(this)
//
//        require('../../../test/List.test')
//        core.execute()
    },
    onReady() {
    },
}
