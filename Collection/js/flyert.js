/********************************
Flyert Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

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