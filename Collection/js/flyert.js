/********************************
Flyert Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/www\.flyert\.com(\.cn)?\/.*plugin url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/flyert.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/www\.flyert\.com(\.cn)?\/.*plugin script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/flyert.js

[MITM]
hostname = www.flyert.com, www.flyert.com.cn
********************************/

let body = $response.body;
let headers = $response.headers;
if (!$response.body) $done({});
const isJson = headers["Content-Type"] == "application/json";
if(isJson){
  let obj = JSON.parse(body);
  if(obj?.Variables){
    let variables = obj.Variables;
    if(variables.data && variables.data.adv){
      variables.data.adv={};
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}else{
  $done();
}