/********************************
Douyu Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.
Checkout Source - https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/Douyu/Douyu_remove_ads.js

QuantumultX rewrite link:
^https?:\/\/apiv2\.douyucdn\.cn\/mgapi\/livenc\/home\/getRecV3 url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js
^https?:\/\/apiv2\.douyucdn\.cn\/japi\/entrance\/roomRes\/nc\/m\/list url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js
^https?:\/\/venus\.douyucdn\.cn\/venus\/config\/static\/update.+keyCodeSet=flow_config url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/apiv2\.douyucdn\.cn\/mgapi\/livenc\/home\/getRecV3 script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js
http-response ^https?:\/\/apiv2\.douyucdn\.cn\/japi\/entrance\/roomRes\/nc\/m\/list script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js
http-response ^https?:\/\/venus\.douyucdn\.cn\/venus\/config\/static\/update.+keyCodeSet=flow_config script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/douyu.js

[MITM]
hostname = apiv2.douyucdn.cn, venus.douyucdn.cn
********************************/

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

function removeAds(data) {
  return data.filter(item => !item.ad);
}

if (url.includes("/getRecV3")) {
  if (obj.data && obj.data.rec_cont) {
    obj.data.rec_cont = removeAds(obj.data.rec_cont);
  }
  if (obj.data && obj.data.rec_card) {
    for (let i in obj.data.rec_card) {
      var v = obj.data.rec_card[i]
      if (v.card_banner) {
          v.card_banner = removeAds(v.card_banner)
      }
    }
  }
}else if (url.includes("/nc/m/list")) {
  if (obj.data) {
    // 直播间悬浮窗
    delete obj.data.pendant_a;
    // 直播间宝箱
    delete obj.data.entrance_d;
  }
}else if (url.includes("keyCodeSet=flow_config") {
  const keysToZero = {
    "greatGodGameSitterSwitch": 0, // 大神游戏陪玩
    "followMoreAnchorEntrance": 0, // 关注更多主播入口
    "sdklivebanner": 0, // 直播横幅
    "homeActFloatSwitch": 0, // 首页活动悬浮窗
    "bringGoodsSwitch": 0, // 带货开关
    "qqGameSwitch": 0 // QQ游戏
  };
  if (obj.data) {
    for (let key in keysToZero) {
      if (obj.data.hasOwnProperty(key)) {
        obj.data[key] = keysToZero[key];
      }
    }
  }
}
$done({ body: JSON.stringify(obj) });