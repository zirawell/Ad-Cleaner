/********************************
Sougou Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
const header = $request.headers;
const contype = header["Content-Type"] || header["content-type"];

if (contype === "application/octet-stream") {
  $done({ status: "HTTP/1.1 404 Not Found" });
} else {
  $done({});
}