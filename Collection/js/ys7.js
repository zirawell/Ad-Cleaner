/********************************
YS7 Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/api\.ys7\.com\/v\d\/valueadded\/operation\/config\/master\/station url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/ys7.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/api\.ys7\.com\/v\d\/valueadded\/operation\/config\/master\/station script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/ys7.js

[MITM]
hostname = api.ys7.com
********************************/

const url = $request.url;
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
let body = $response.body;

if(obj){
  if (url.includes("/config/master/station")){
    if (body.stationInfo && body.stationInfo.groupList && body.stationInfo.groupList[1] && body.stationInfo.groupList[1].serviceList) {
        // 删除 健康咨询
        if(body.stationInfo.groupList[1].serviceList[9]){
          delete body.stationInfo.groupList[1].serviceList[9];
        }
        // 删除 保险服务
        if(body.stationInfo.groupList[1].serviceList[10]){
          delete body.stationInfo.groupList[1].serviceList[10];
        }
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}else{
  $done();
}