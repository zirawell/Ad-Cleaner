/********************************
Qbb Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if(obj?.adBannerList){
  obj.adBannerList=[];
}
body = JSON.stringify(obj);
$done({ body });