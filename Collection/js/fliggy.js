/********************************
Feizhu Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.ssif\.pattern\.home url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/fliggy.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.ssif\.pattern\.home script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/fliggy.js

[MITM]
hostname = acs.m.taobao.com
********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if(url.includes("mtop.fliggy.ssif.pattern.home")){
  const designedStructure = {
    "s_vertical_homepage_inner_scroll_layout" : [
      "s_vertical_homepage_search_btns_2022",
      "s_vertical_homepage_kingkong_2022"
    ],
    "root" : [
      "s_vertical_homepage_inner_scroll_layout",
      "s_vertical_homepage_cheap_2021_5",
      "s_vertical_homepage_wonderful_journey_channel",
      "s_vertical_homepage_cheap_bottom_gap",
      "s_vertical_homepage_topservice_layout"
    ],
    "s_share_guessyoulike_home_gul_tab_layout" : [
      "s_share_guessyoulike_home_gul_tab_2021"
    ]
  };
 if(typeof obj?.data?.hierarchy?.structure !== "undefined") {
    obj.data.hierarchy.structure = designedStructure;
 }
}
body = JSON.stringify(obj);
$done({ body });