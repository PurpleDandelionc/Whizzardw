import {describe, it,afterEach, expect} from 'deccjsunit/index'
import huks from '@ohos.security.huks'
import * as Data from '../data.js'


let HksKeyAlg = {
    HKS_ALG_DSA : 3,
}

let HksKeyPurpose = {
    HKS_KEY_PURPOSE_SIGN : 4,
    HKS_KEY_PURPOSE_VERIFY : 8,
}

let HksKeyDigest = {
    HKS_DIGEST_SHA1 : 10,
    HKS_DIGEST_SHA224 : 11,
    HKS_DIGEST_SHA256 : 12,
    HKS_DIGEST_SHA384 : 13,
    HKS_DIGEST_SHA512 : 14,
}

let HksTagType = {
    HKS_TAG_TYPE_UINT : 2 << 28,
    HKS_TAG_TYPE_BYTES : 5 << 28
}

let HksTag = {
    HKS_TAG_ALGORITHM : HksTagType.HKS_TAG_TYPE_UINT | 1,
    HKS_TAG_PURPOSE : HksTagType.HKS_TAG_TYPE_UINT | 2,
    HKS_TAG_KEY_SIZE : HksTagType.HKS_TAG_TYPE_UINT | 3,
    HKS_TAG_DIGEST : HksTagType.HKS_TAG_TYPE_UINT | 4,
    HKS_TAG_AGREE_PUBLIC_KEY : HksTagType.HKS_TAG_TYPE_BYTES | 22,

}

let HksKeySize = {
    HKS_DSA_KEY_SIZE_512 : 512,
    HKS_DSA_KEY_SIZE_768 : 768,
    HKS_DSA_KEY_SIZE_1024 : 1024,
    HKS_DSA_KEY_SIZE_2048 : 2048,
    HKS_DSA_KEY_SIZE_3072 : 3072,
    HKS_DSA_KEY_SIZE_4096 : 4096,
}

let HuksSignVerify002 = {
    HuksKeySIZE:{"tag": HksTag.HKS_TAG_KEY_SIZE, "value": HksKeySize.HKS_DSA_KEY_SIZE_512},
    HuksKeySIZE1024:{"tag": HksTag.HKS_TAG_KEY_SIZE, "value": HksKeySize.HKS_DSA_KEY_SIZE_1024},
    HuksKeyAlgDSA:{"tag": HksTag.HKS_TAG_ALGORITHM, "value": HksKeyAlg.HKS_ALG_DSA},
    HuksKeyDSAPurposeSIGN:{"tag": HksTag.HKS_TAG_PURPOSE, "value": HksKeyPurpose.HKS_KEY_PURPOSE_SIGN},
    HuksKeyDSAPurposeVERIFY:{"tag": HksTag.HKS_TAG_PURPOSE, "value": HksKeyPurpose.HKS_KEY_PURPOSE_VERIFY},
    HuksTagDSADigestSHA1 : {"tag": HksTag.HKS_TAG_DIGEST, "value": HksKeyDigest.HKS_DIGEST_SHA1},
    HuksTagDSADigestSHA224 : {"tag": HksTag.HKS_TAG_DIGEST, "value": HksKeyDigest.HKS_DIGEST_SHA224},
    HuksTagDSADigestSHA256 : {"tag": HksTag.HKS_TAG_DIGEST, "value": HksKeyDigest.HKS_DIGEST_SHA256},
    HuksTagDSADigestSHA384 : {"tag": HksTag.HKS_TAG_DIGEST, "value": HksKeyDigest.HKS_DIGEST_SHA384},
    HuksTagDSADigestSHA512 : {"tag": HksTag.HKS_TAG_DIGEST, "value": HksKeyDigest.HKS_DIGEST_SHA512},
    HuksKeyRSAPurposeSING_VERIFY:{"tag": HksTag.HKS_TAG_PURPOSE, "value": HksKeyPurpose.HKS_KEY_PURPOSE_SIGN | HksKeyPurpose.HKS_KEY_PURPOSE_VERIFY},
}

let finishOutData;
var handle = {};
let exportKey;
let srcData65 = Data.Data_65b;
let srcData65Kb = stringToUint8Array(srcData65);

function stringToUint8Array(str){
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}

function Uint8ArrayToString(fileData){
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString
}

async function publicGenerateKeyFunc(keyAlias, HuksOptions) {
    await generateKey(keyAlias, HuksOptions).then((data) => {
        console.log(`test generateKey data: ${JSON.stringify(data)}`);
        expect(data.errorCode == 0).assertTrue()
    }).catch((err) => {
        console.log("test generateKey err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function generateKey(srcKeyAlies, HuksOptions) {
    return new Promise((resolve,reject)=>{
        huks.generateKey(srcKeyAlies, HuksOptions, function(err,data){
            console.log(`test generateKey data: ${JSON.stringify(data)}`);
            if (err.code !== 0) {
                console.log("test generateKey err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicImportKey(keyAlias, HuksOptions) {
    let _InData = HuksOptions.inData;
    HuksOptions.inData = finishOutData;
    console.log(`test ImportKey HuksOptions: ${JSON.stringify(HuksOptions)}`);
    await importKey(keyAlias, HuksOptions).then((data) => {
        console.log(`test ImportKey data: ${JSON.stringify(data)}`);
    }).catch((err) => {
        console.log("test ImportKey err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
    HuksOptions.inData = _InData;
}

function importKey(srcKeyAlies, HuksOptions) {
    return new Promise((resolve,reject)=>{
        huks.importKey(srcKeyAlies, HuksOptions, function(err,data){
            console.log(`test importKey data: ${JSON.stringify(data)}`);
            if (err.code !== 0) {
                console.log("test importKey err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicExportKey(keyAlias, HuksOptions) {
    await exportkey(keyAlias, HuksOptions).then((data) => {
        console.log(`test exportKey data: ${JSON.stringify(data)}`);
        finishOutData = data.outData;
    }).catch((err) => {
        console.log("test exportKey err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function exportkey(srcKeyAlies, HuksOptions) {
    return new Promise((resolve,reject)=>{
        huks.exportKey(srcKeyAlies, HuksOptions, function(err,data){
            console.log(`test exportKey data: ${JSON.stringify(data)}`);
            if (err.code !== 0) {
                console.log("test exportKey err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicInitFunc(keyAlias, HuksOptions) {
    await init(keyAlias, HuksOptions).then((data) => {
        console.log(`test init data: ${JSON.stringify(data)}`);
        handle = {
            "handle1": data.handle1,
            "handle2": data.handle2
        };
        expect(data.errorCode == 0).assertTrue()
    }).catch((err) => {
        console.log("test init err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function init(srcKeyAlies, HuksOptions) {
    return new Promise((resolve,reject)=>{
        huks.init(srcKeyAlies, HuksOptions, function(err,data){
            if (err.code !== 0) {
                console.log("test init err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicUpdateFunc(HuksOptions) {
    let dateSize = 64
    let _HuksOptions_inData = HuksOptions.inData;
    let inDataArray = HuksOptions.inData;
    if (Uint8ArrayToString(inDataArray).length < dateSize) {
        await update(handle, HuksOptions);
        HuksOptions.inData = _HuksOptions_inData
    } else {
        let count = Math.floor(Uint8ArrayToString(inDataArray).length / dateSize);
        let remainder = Uint8ArrayToString(inDataArray).length % dateSize;
        console.log(`test before update length: ${Uint8ArrayToString(inDataArray).length}`);
        console.log(`test before update count: ${count}`);
        console.log(`test before update remainder: ${remainder}`);
        for (let i = 0;i < count; i++) {
            HuksOptions.inData = stringToUint8Array(Uint8ArrayToString(_HuksOptions_inData).slice(dateSize * i, dateSize * (i + 1)));
            await update(handle, HuksOptions);
            HuksOptions.inData = _HuksOptions_inData
        }
        if (remainder !== 0) {
            HuksOptions.inData = stringToUint8Array(Uint8ArrayToString(_HuksOptions_inData).slice(dateSize * count, Uint8ArrayToString(inDataArray).length));
            await update(handle, HuksOptions);
            HuksOptions.inData = _HuksOptions_inData
        }
    }
}

async function update(handle, HuksOptions) {
    console.log(`test update data ${JSON.stringify(HuksOptions)}`);
    await updateCallback(handle, HuksOptions).then(async (data) => {
        console.log(`test update data ${JSON.stringify(data)}`);
        expect(data.errorCode == 0).assertTrue()
    }).catch((err) => {
        console.log("test update err information: " + err)
        expect(null).assertFail();
    });
}

function updateCallback(handle, HuksOptions){
    return new Promise((resolve,reject)=>{
        huks.update(handle, HuksOptions, function(err,data){
            if (err.code !== 0) {
                console.log("test update err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicFinishFunc(HuksOptions) {
    await finish(handle, HuksOptions).then((data) => {
        console.log(`test finish data: ${JSON.stringify(data)}`);
        exportKey = data.outData;
        expect(data.errorCode == 0).assertTrue()
    }).catch((err) => {
        console.log("test finish err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function finish(handle, HuksOptions_Finish){
    return new Promise((resolve,reject)=>{
        huks.finish(handle, HuksOptions_Finish,function(err,data){
            if (err.code !== 0) {
                console.log("test generateKey err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicAbortFucn(HuksOptions) {
    await abort(handle, HuksOptions).then((data) => {
        console.log(`test abort data: ${JSON.stringify(data)}`);
        expect(data.errorCode == 0).assertTrue();
    }).catch((err) => {
        console.log("test abort err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function abort(handle, HuksOptions_Abort){
    return new Promise((resolve,reject)=>{
        huks.abort(handle, HuksOptions_Abort, function(err,data){
            if (err.code !== 0) {
                console.log("test abort err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicDeleteKeyFunc(KeyAlias, HuksOptions) {
    await deleteKey(KeyAlias, HuksOptions).then((data) => {
        console.log(`test deleteKey data: ${JSON.stringify(data)}`);
        expect(data.errorCode == 0).assertTrue()
    }).catch((err) => {
        console.log("test deleteKey err information: " + JSON.stringify(err))
        expect(null).assertFail();
    });
}

function deleteKey(srcKeyAlies, HuksOptions) {
    return new Promise((resolve,reject)=>{
        huks.deleteKey(srcKeyAlies, HuksOptions, function(err,data){
            if (err.code !== 0) {
                console.log("test deleteKey err information: " + JSON.stringify(err) );
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


async function publicSignVerifyFunc(srcKeyAlies, newSrcKeyAlies, HuksOptions, thirdInderfaceName, isSING) {
    try {
        let keyAlias = srcKeyAlies;
        if (isSING) {
            HuksOptions.properties.splice(1, 1, HuksSignVerify002.HuksKeyRSAPurposeSING_VERIFY);
            HuksOptions.properties.splice(2, 0, HuksSignVerify002.HuksKeySIZE1024);
            console.log(`test publicSignVerifyFunc GenerateHuksOptions: ${JSON.stringify(HuksOptions)}`);
            await publicGenerateKeyFunc(keyAlias, HuksOptions);
            HuksOptions.properties.splice(1, 1, HuksSignVerify002.HuksKeyDSAPurposeSIGN);
            HuksOptions.properties.splice(2, 1);
        } else {
            keyAlias = newSrcKeyAlies;
            await publicImportKey(keyAlias, HuksOptions);
        }
        console.log(`test init HuksOptions: ${JSON.stringify(HuksOptions)}`);
        await publicInitFunc(keyAlias, HuksOptions);
        await publicUpdateFunc(HuksOptions)
        if (thirdInderfaceName == "finish") {
            if (isSING) {
                HuksOptions.outData = new Uint8Array(new Array(1024).fill(''));
                await publicFinishFunc(HuksOptions);
                HuksOptions.properties.splice(1, 1, HuksSignVerify002.HuksKeyRSAPurposeSING_VERIFY)
                console.log(`test before exportKey Gen_HuksOptions: ${JSON.stringify(HuksOptions)}`);
                await publicExportKey(keyAlias, HuksOptions);
            } else {
                HuksOptions.outData = exportKey;
                await publicFinishFunc(HuksOptions);
            }
        } else {
            await publicAbortFucn(HuksOptions);
        }
        if ((isSING && thirdInderfaceName == "abort")) {
            HuksOptions.properties.splice(1, 1, HuksSignVerify002.HuksKeyRSAPurposeSING_VERIFY);
            await publicDeleteKeyFunc(srcKeyAlies, HuksOptions);
        } else if (!isSING) {
            HuksOptions.properties.splice(1, 1, HuksSignVerify002.HuksKeyDSAPurposeVERIFY);
            await publicDeleteKeyFunc(newSrcKeyAlies, HuksOptions);
        }
    } catch (e) {
        expect(null).assertFail();
    }
}

describe('SecurityHuksSignVerifyDSACallbackJsunit', function () {
    afterEach(function () {
        finishOutData = 0;
        exportKey = 0;
        console.info('test afterEach called')
    })
    /**
     * @tc.name: testSignVerifyDSA104
     * @tc.desc: alg-DSA dig-DIGEST_SHA1 inputdate-65kb  init>update>abort
     * @tc.type: FUNC
     */
    it('testSignVerifyDSA104', 0, async function (done) {
        const srcKeyAlies = 'testSignVerifyDSASIGNSHA1KeyAlias004'
        const NewSrcKeyAlies = 'testSignVerifyDSASIGNSHA1KeyAliasNew104'
        let HuksOptions = {
            "properties": new Array(HuksSignVerify002.HuksKeyAlgDSA, HuksSignVerify002.HuksKeyDSAPurposeSIGN, HuksSignVerify002.HuksTagDSADigestSHA1),
            "inData": srcData65Kb,
        }
        await publicSignVerifyFunc(srcKeyAlies,NewSrcKeyAlies,HuksOptions,"abort",true)
        done();
    })
})