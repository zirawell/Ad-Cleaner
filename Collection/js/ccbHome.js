/********************************
CCBHome Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if(obj?.data?.curtains){
  obj.data.curtains=[];
}
if(obj?.data?.startAds){
  obj.data.startAds=[];
}
if(obj?.data?.customer){
  obj.data.customer=null;
}
body = JSON.stringify(obj);
$done({ body });