/********************************
Gaoding Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/www\.gaoding\.com\/api\/v\d\/oc\/exhibitions\/template\/resources$ url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/gaoding.js
^https?:\/\/www\.gaoding\.com\/api\/v\d\/oc\/exhibitions\/app_mine\/resources url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/gaoding.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/www\.gaoding\.com\/api\/v\d\/oc\/exhibitions\/template\/resources$ script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/gaoding.js
http-response ^https?:\/\/www\.gaoding\.com\/api\/v\d\/oc\/exhibitions\/app_mine\/resources script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/gaoding.js

[MITM]
hostname = www.gaoding.com
********************************/

const url = $request.url;
let obj=JSON.parse($response.body);
if(url.indexOf("/oc/exhibitions/template/resources")!=-1){
  // 移除首页轮播图
  if (obj.pits && obj.pits[0]) {
    delete obj.pits[0].delivery_materials;
  }
}else if(url.indexOf("/oc/exhibitions/app_mine/resources")!=-1){
  // 移除我的页面轮播图
  if (obj.pits && obj.pits[2]) {
    delete obj.pits[2].delivery_materials;
  }
}else{
  $done({});
}
$done({body:JSON.stringify(obj)});