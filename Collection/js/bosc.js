/********************************
BOSC Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/
const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];

const blockList = [
  "com.GLMobile.Market.PopupListQry",
  "com.GLMobile.Customer.QryGreeting",
  "alipay.client.updateVersion",
  "alipay.client.getUnionResource",
  "com.GLMobile.Market.SecondFloorResourcesQry",
  "com.GLMobile.NewOnlineService.HomeData",
  "com.GLMobile.Customer.HomePageInfoQry"

];
  
blockList.includes(headopt)?$done({ status: "HTTP/1.1 404 Not Found" }):$done({});