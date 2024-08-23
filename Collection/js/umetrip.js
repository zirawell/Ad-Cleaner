/********************************
Umetrip Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
const header = $request.headers;
const ua = $request.headers.rpid||$request.headers.Rpid;
const blockIds = [
	"1000002",
	"1000019",
	"1430064"
];

if(blockIds.includes(ua)){
	$done({status:"HTTP/1.1 404 Not Found"});
}else{
	$done();
}