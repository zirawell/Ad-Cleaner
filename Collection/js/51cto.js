/********************************
51CTO Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
let result = obj.result;
if(result.adv_summary){
  result.adv_summary={};
}
if(result.hasAd){
  result.hasAd="0";
}
if(result.indexAd){
  result.indexAd={};
}
if(result.showThird){
  result.showThird="0";
}
if(result.status){
  result.status="0";
}
if(result.appVersion){
  result.appVersion="3.5.0";
}
if(result.ad){
  result.ad={};
}
if(result.isExist){
  result.isExist="0";
}
body = JSON.stringify(obj);
$done({ body });
