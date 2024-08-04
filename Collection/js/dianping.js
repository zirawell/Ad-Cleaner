/********************************
Dianping Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/img\.meituan\.net\/dpmobile\/ url script-response-header https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/dianping.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https?:\/\/img\.meituan\.net\/dpmobile\/ script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/dianping.js

[MITM]
hostname = mobilepaas.abchina.com.cn
********************************/

const url = $request.url;
const header = $request.headers;
const headopt = header["M-SHARK-TRACEID"] || header["m-shark-traceid"];

if (headopt != null) {
  $done({ status: "HTTP/1.1 404 Not Found" });
} else {
  $done({});
}