/********************************
AMDC - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
const header = $request.headers;
const ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
       // 高德地图
  if ( ua.includes("AMapiPhone") || 
       // 阿里巴巴
       ua.includes("Alibaba") || 
       // 菜鸟
       ua.includes("Cainiao4iPhone") || 
       // 飞猪旅行
       ua.includes("%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C") ||
       // 盒马
       ua.includes("Hema4iPhone") ||
       // 闲鱼
       ua.includes("%E9%97%B2%E9%B1%BC")
  ) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
} else {
  $done({});
}