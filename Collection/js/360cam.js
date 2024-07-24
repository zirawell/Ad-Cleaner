/********************************
360SmartCamera Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/jia\.360\.cn\/conf\/v\d\.json url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/360cam.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/jia\.360\.cn\/conf\/v\d\.json script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/360cam.js

[MITM]
hostname = jia.360.cn
********************************/

if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
// 删除 - 我的页面推广语
delete obj.activity;
// 删除 - 底栏商城入口
delete obj.tab_conf["tab_360Mall"];
// 删除 - 广告配置
delete obj.ad_conf;
body = JSON.stringify(obj);
$done({ body });