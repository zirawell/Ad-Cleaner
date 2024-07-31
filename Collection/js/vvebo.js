/********************************
VVebo Enhance - Version 1.0
Checkout Source - https://gitlab.com/lodepuly/vpn_tool/raw/master/Resource/Script/VVebo/VVebo_repair.js
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
^https?:\/\/api\.weibo\.cn\/2\/users\/show\? url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
^https?:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
^https?:\/\/api\.weibo\.cn\/2\/remind\/unread_count\? url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
^https?:\/\/api\.weibo\.cn\/2\/profile\/statuses\/tab\? url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
^https?:\/\/api\.weibo\.cn\/2\/cardlist\? url script-response-body https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-response ^https?:\/\/api\.weibo\.cn\/2\/users\/show\? script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
http-response ^https?:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
http-response ^https?:\/\/api\.weibo\.cn\/2\/remind\/unread_count\? script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
http-response ^https?:\/\/api\.weibo\.cn\/2\/profile\/statuses\/tab\? script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js
http-response ^https?:\/\/api\.weibo\.cn\/2\/cardlist\? script-path=https://raw.githubusercontent.com/zirawell/Ad-Cleaner/main/Collection/js/vvebo.js

[MITM]
hostname = api.weibo.cn
********************************/

let url = $request.url;
let hasUid = (url) => url.includes("uid");
let getUid = (url) => (hasUid(url) ? url.match(/uid=(\d+)/)[1] : undefined);
if (url.includes("remind/unread_count")) {
  $persistentStore.write(getUid(url), "uid");
  $done({});
} else if (url.includes("statuses/user_timeline")) {
  let uid = getUid(url) || $persistentStore.read("uid");
  url = url.replace("statuses/user_timeline", "profile/statuses/tab").replace("max_id", "since_id");
  url = url + `&containerid=230413${uid}_-_WEIBO_SECOND_PROFILE_WEIBO`;
  $done({ url });
} else if (url.includes("profile/statuses/tab")) {
  let data = JSON.parse($response.body);
  let statuses = data.cards
    .map((card) => (card.card_group ? card.card_group : card))
    .flat()
    .filter((card) => card.card_type === 9)
    .map((card) => card.mblog)
    .map((status) => (status.isTop ? { ...status, label: "置顶" } : status));
  let sinceId = data.cardlistInfo.since_id;
  $done({ body: JSON.stringify({ statuses, since_id: sinceId, total_number: 100 }) });
} if (url.includes("selffans")) {
  let data = JSON.parse($response.body);
  let cards = data.cards.filter((card) => card.itemid !== "INTEREST_PEOPLE2");
  $done({ body: JSON.stringify({ ...data, cards }) });
} else {
  $done({});
}