/********************************
YS7 Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/config/master/station")){
  if (obj.stationInfo && obj.stationInfo.groupList && obj.stationInfo.groupList[1] && obj.stationInfo.groupList[1].serviceList) {
      // 删除 健康咨询
      if(obj.stationInfo.groupList[1].serviceList[9]){
        delete obj.stationInfo.groupList[1].serviceList[9];
      }
      // 删除 保险服务
      if(obj.stationInfo.groupList[1].serviceList[10]){
        delete obj.stationInfo.groupList[1].serviceList[10];
      }
  }
}
body = JSON.stringify(obj);
$done({ body });