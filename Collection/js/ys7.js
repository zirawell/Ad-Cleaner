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
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/config/master/station")){
  if (obj.stationInfo && obj.stationInfo.groupList && obj.stationInfo.groupList[1] && obj.stationInfo.groupList[1].serviceList) {
      // 删除 健康咨询
      if(obj.stationInfo.groupList[1].serviceList[9]){
        delete obj.stationInfo.groupList[1].serviceList[9];
      }
      // 删除 保险服务
      if(obj.stationInfo.groupList[1].serviceList[10]){
        delete obj.stationInfo.groupList[1].serviceList[10];
      }
  }
}
body = JSON.stringify(obj);
$done({ body });