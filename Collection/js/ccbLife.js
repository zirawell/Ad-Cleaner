/********************************
CCBLIFE Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB04 url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/ccbLife.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/yunbusiness\.ccb\.com\/basic_service\/txCtrl\?txcode=A3341AB04 script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/ccbLife.js

[MITM]
hostname = yunbusiness.ccb.com
********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (obj?.data?.ICON_SKIN_INFO) {
  obj.data.ICON_SKIN_INFO = {};
}
body = JSON.stringify(obj);
$done({ body });