/********************************
Sptcc Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/online\.sptcc\.com:\d+\/handapp_update\/AppInfo url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sptcc.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/online\.sptcc\.com:\d+\/handapp_update\/AppInfo script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sptcc.js

[MITM]
hostname = online.sptcc.com
********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if(obj?.myPageBanner){
  obj.myPageBanner=[];
}
if(obj?.mainPage_recommend){
  obj.mainPage_recommend.waterfallFlow=[];
}
if(obj?.ggLykLinkArray){
  obj.ggLykLinkArray=[];
}
body = JSON.stringify(obj);
$done({ body });