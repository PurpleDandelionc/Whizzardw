/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Core, ExpectExtend } from 'deccjsunit/index'

const injectRef = Object.getPrototypeOf(global) || global
injectRef.regeneratorRuntime = require('@babel/runtime/regenerator')

export default {
    data: {
        title: "",
        testTime: 0
    },
    onInit() {
        console.info('Acts_DataAbilityJSTest onInit');
        this.title = this.$t('strings.world');
    },
    onShow() {
        console.info('Acts_DataAbilityJSTest onShow');
        console.info('Acts_DataAbilityJSTest testTime' + this.testTime);
        if (this.testTime == 0) {
            const core = Core.getInstance()
            const expectExtend = new ExpectExtend({
                'id': 'extend'
            })
            core.addService('expect', expectExtend)
            core.init()
            const configService = core.getDefaultService('config')
            this.timeout = 30000;
            configService.setConfig(this)

            require('../../../test/List.test')
            core.execute()
        }
        this.testTime++;
    },
    onReady() {
        console.info('Acts_DataAbilityJSTest onReady');
    },
    onActive() {
        console.info('Acts_DataAbilityJSTest onActive');
    },
    onInactive() {
        console.info('Acts_DataAbilityJSTest onInactive');
    },
    onHide() {
        console.info('Acts_DataAbilityJSTest onHide');
    },
    onDestroy() {
        console.info('Acts_DataAbilityJSTest onDestroy');
    },
    onBackPress() {
        console.info('Acts_DataAbilityJSTest onBackPress');
    },
    onNewRequest() {
        console.info('Acts_DataAbilityJSTest onNewRequest');
    },
    onStartContinuation() {
        console.info('Acts_DataAbilityJSTest onStartContinuation');
    },
    onSaveData(value) {
        console.info('Acts_DataAbilityJSTest onSaveData:' + JSON.stringify(value));
    },
    onRestoreData(value) {
        console.info('Acts_DataAbilityJSTest onRestoreData:' + JSON.stringify(value));
    },
    onCompleteContinuation(code) {
        console.info('Acts_DataAbilityJSTest onCompleteContinuation:' + JSON.stringify(code));
    },
    onConfigurationUpdated(configuration) {
        console.info('Acts_DataAbilityJSTest onConfigurationUpdated:' + JSON.stringify(configuration));
    }
}