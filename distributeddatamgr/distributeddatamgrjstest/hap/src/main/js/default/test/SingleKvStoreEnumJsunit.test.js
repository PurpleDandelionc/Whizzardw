/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import factory from '@ohos.data.distributedData';

describe('KvStoreEnumTest', function () {
    it('enum_usertype_test_same_user_id', 0, function () {
        var sameUserId = factory.UserType.SAME_USER_ID;
        console.info('sameUserId = ' + sameUserId);
        expect(sameUserId == 0).assertTrue()
    })

    it('enum_constants_test_max_key_length', 0, function () {
        var maxKeyLength = factory.Constants.MAX_KEY_LENGTH;
        console.info('maxKeyLength = ' + maxKeyLength);
        expect(maxKeyLength == 1024).assertTrue()
    })

    it('enum_constants_test_max_value_length', 0, function () {
        var maxValueLength = factory.Constants.MAX_VALUE_LENGTH;
        console.info('maxValueLength = ' + maxValueLength);
        expect(maxValueLength == 4194303).assertTrue()
    })

    it('enum_constants_test_max_key_length_device', 0, function () {
        var maxKeyLengthDevice = factory.Constants.MAX_KEY_LENGTH_DEVICE;
        console.info('maxKeyLengthDevice = ' + maxKeyLengthDevice);
        expect(maxKeyLengthDevice == 896).assertTrue()
    })

    it('enum_constants_test_max_store_id_length', 0, function () {
        var maxStoreIdLength = factory.Constants.MAX_STORE_ID_LENGTH;
        console.info('maxStoreIdLength = ' + maxStoreIdLength);
        expect(maxStoreIdLength == 128).assertTrue()
    })

    it('enum_constants_test_max_query_length', 0, function () {
        var maxQueryLength = factory.Constants.MAX_QUERY_LENGTH;
        console.info('maxQueryLength = ' + maxQueryLength);
        expect(maxQueryLength == 512000).assertTrue()
    })

    it('enum_constants_test_max_batch_size', 0, function () {
        var maxBatchSize = factory.Constants.MAX_BATCH_SIZE;
        console.info('maxBatchSize = ' + maxBatchSize);
        expect(maxBatchSize == 128).assertTrue()
    })

    it('enum_valuetype_test_string', 0, function () {
        var string = factory.ValueType.STRING;
        console.info('string = ' + string);
        expect(string == 0).assertTrue()
    })

    it('enum_valuetype_test_integer', 0, function () {
        var integer = factory.ValueType.INTEGER;
        console.info('integer = ' + integer);
        expect(integer == 1).assertTrue()
    })

    it('enum_valuetype_test_float', 0, function () {
        var float = factory.ValueType.FLOAT;
        console.info('float = ' + float);
        expect(float == 2).assertTrue()
    })

    it('enum_valuetype_test_byte_array', 0, function () {
        var byteArray = factory.ValueType.BYTE_ARRAY;
        console.info('byteArray = ' + byteArray);
        expect(byteArray == 3).assertTrue()
    })

    it('enum_valuetype_test_boolean', 0, function () {
        var boolean = factory.ValueType.BOOLEAN;
        console.info('boolean = ' + boolean);
        expect(boolean == 4).assertTrue()
    })

    it('enum_valuetype_test_double', 0, function () {
        var double = factory.ValueType.DOUBLE;
        console.info('double = ' + double);
        expect(double == 5).assertTrue()
    })

    it('enum_syncmode_test_pull_only', 0, function () {
        var pullonly = factory.SyncMode.PULL_ONLY;
        console.info('pullonly = ' + pullonly);
        expect(pullonly == 0).assertTrue()
    })

    it('enum_syncmode_test_push_only', 0, function () {
        var pushonly = factory.SyncMode.PUSH_ONLY;
        console.info('pushonly = ' + pushonly);
        expect(pushonly == 1).assertTrue()
    })

    it('enum_syncmode_test_push_pull', 0, function () {
        var pushpull = factory.SyncMode.PUSH_PULL;
        console.info('pushpull = ' + pushpull);
        expect(pushpull == 2).assertTrue()
    })

    it('enum_subscribetype_test_subscribe_type_local', 0, function () {
        var local = factory.SubscribeType.SUBSCRIBE_TYPE_LOCAL;
        console.info('local = ' + local);
        expect(local == 0).assertTrue()
    })

    it('enum_subscribetype_test_subscribe_type_remote', 0, function () {
        var remote = factory.SubscribeType.SUBSCRIBE_TYPE_REMOTE;
        console.info('remote = ' + remote);
        expect(remote == 1).assertTrue()
    })

    it('enum_subscribetype_test_subscribe_type_all', 0, function () {
        var all = factory.SubscribeType.SUBSCRIBE_TYPE_ALL;
        console.info('all = ' + all);
        expect(all == 2).assertTrue()
    })

    it('enum_kvstoretype_test_device_collaboration', 0, function () {
        var collaboration = factory.KVStoreType.DEVICE_COLLABORATION;
        console.info('collaboration = ' + collaboration);
        expect(collaboration == 0).assertTrue()
    })

    it('enum_kvstoretype_test_single_version', 0, function () {
        var single = factory.KVStoreType.SINGLE_VERSION;
        console.info('single = ' + single);
        expect(single == 1).assertTrue()
    })

    it('enum_kvstoretype_test_multi_version', 0, function () {
        var multi = factory.KVStoreType.MULTI_VERSION;
        console.info('multi = ' + multi);
        expect(multi == 2).assertTrue()
    })

    it('enum_securitylevel_test_no_level', 0, function () {
        var nolevel = factory.SecurityLevel.NO_LEVEL;
        console.info('nolevel = ' + nolevel);
        expect(nolevel == 0).assertTrue()
    })

    it('enum_securitylevel_test_s0', 0, function () {
        var s0 = factory.SecurityLevel.S0;
        console.info('s0 = ' + s0);
        expect(s0 == 1).assertTrue()
    })

    it('enum_securitylevel_test_s1', 0, function () {
        var s1 = factory.SecurityLevel.S1;
        console.info('s1 = ' + s1);
        expect(s1 == 2).assertTrue()
    })

    it('enum_securitylevel_test_s2', 0, function () {
        var s2 = factory.SecurityLevel.S2;
        console.info('s2 = ' + s2);
        expect(s2 == 3).assertTrue()
    })

    it('enum_securitylevel_test_s3', 0, function () {
        var s3 = factory.SecurityLevel.S3;
        console.info('s3 = ' + s3);
        expect(s3 == 5).assertTrue()
    })

    it('enum_securitylevel_test_s4', 0, function () {
        var s4 = factory.SecurityLevel.S4;
        console.info('s4 = ' + s4);
        expect(s4 == 6).assertTrue()
    })
})