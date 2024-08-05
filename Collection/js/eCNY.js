/********************************
eCNY Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https？:\/\/mgs\.wallet\.pbcdci\.cn:\d+\/mgw\.htm$ url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/eCNY.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https？:\/\/mgs\.wallet\.pbcdci\.cn:\d+\/mgw\.htm$ script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/eCNY.js

[MITM]
hostname = mgs.wallet.pbcdci.cn
********************************/

const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];

const blockList = [
    "alipay.client.updateVersion"
];

if (blockList?.includes(headopt)) {
  $done({ status: "HTTP/1.1 404 Not Found",body: "",headers: "" });
} else {
  $done({});
}