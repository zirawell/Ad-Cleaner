/********************************
ShengQianKuaiBao Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
if (!$response.body) $done({});
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/remind/list")){
  if(obj?.data){
    obj.data.recommend_coupon_list=[];
  }
}else if(url.includes("/operate/elements")){
  if(obj?.data?.user_center_mid_2022?.length > 0){
    obj.data.user_center_mid_2022=[];
  }
  if(obj?.data?.user_center_slide_show_pic_2022?.length > 0){
    obj.data.user_center_slide_show_pic_2022=[];
  }
  if(obj?.data?.home_mid_banner_multi_202208?.length > 0){
    obj.data.home_mid_banner_multi_202208=[];
  }
}
body = JSON.stringify(obj);
$done({ body });