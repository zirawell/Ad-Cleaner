/********************************
ShengQianKuaiBao Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/api\.17gwx\.com\/v\d\/history\/remind\/listV url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sqkb.js
^https?:\/\/api\.17gwx\.com\/operate\/elements url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sqkb.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/api\.17gwx\.com\/v\d\/history\/remind\/listV script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sqkb.js
http-response ^https?:\/\/api\.17gwx\.com\/operate\/elements script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/sqkb.js

[MITM]
hostname = api.17gwx.com
********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/remind/list")){
  if(obj?.data){
    obj.data.recommend_coupon_list=[];
  }
}else if(url.includes("/operate/elements")){
  if(obj?.data?.user_center_mid_2022?.length > 0){
    obj.data.user_center_mid_2022=[];
  }
  if(obj?.data?.user_center_slide_show_pic_2022?.length > 0){
    obj.data.user_center_slide_show_pic_2022=[];
  }
  if(obj?.data?.home_mid_banner_multi_202208?.length > 0){
    obj.data.home_mid_banner_multi_202208=[];
  }
}
body = JSON.stringify(obj);
$done({ body });