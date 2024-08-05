/********************************
Dianping Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/img\.meituan\.net\/dpmobile\/ url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/dianping.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/img\.meituan\.net\/dpmobile\/ script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/dianping.js

[MITM]
hostname = img.meituan.net
********************************/

const url = $request.url;
const header = $request.headers;
const resp = {};
const headopt = header["M-SHARK-TRACEID"] || header["m-shark-traceid"];

if (headopt != null) {
  $done({ body:"", headers:"", status: "HTTP/1.1 204 No Content" });
} else{
  $done({});
}