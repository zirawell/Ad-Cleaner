/********************************
Maidanba Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/
const resp = {};
if (!$response.body) $done({});
// 买单吧-充值页面
var parser = new DOMParser();
var doc = parser.parseFromString($response.body, "text/html");
var element = doc.getElementById("banner");
element.parentNode.removeChild(element);
resp.body = doc.documentElement.outerHTML;
$done(resp);