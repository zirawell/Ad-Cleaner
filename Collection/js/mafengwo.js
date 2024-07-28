/********************************
Mafengwo Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/mapi\.mafengwo\.cn\/user\/profile\/get_list url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/mafengwo.js
^https?:\/\/mapi\.mafengwo\.cn\/user\/profile\/get_profile url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/mafengwo.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/mapi\.mafengwo\.cn\/user\/profile\/get_list script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/mafengwo.js
http-response ^https?:\/\/mapi\.mafengwo\.cn\/user\/profile\/get_profile script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/mafengwo.js

[MITM]
hostname = mapi.mafengwo.cn
********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
// 打卡提醒
if (url.includes("/get_profile")){
  if(obj?.data?.daka_guide_info){
    delete obj.data.daka_guide_info;
  }
// 我的页推广内容
}else if(url.includes("/get_list")){
  if(obj?.data?.list?.length > 0){
    obj.data.list = obj.data.list.filter(function(item) {
        if(item.style != "inspire"){
          return item;
        }
    });
  }
}
body = JSON.stringify(obj);
$done({ body });