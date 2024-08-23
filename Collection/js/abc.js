/********************************
ABC Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];

const blockList = [
    "com.bankabc.recommendcenter.homepage.gethpadverinfo",
    "com.abchina.mbank.common.homepage.getStartParam",
    "com.bankabc.credit.query.custbillqry.getadv",
    "alipay.client.updateVersion"
];

if (blockList?.includes(headopt)) {
  $done({ status: "HTTP/1.1 404 Not Found" });
} else {
  $done({});
}