/********************************
Keep Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

if (!$response.body) $done({});
if (-1 != $request.url.indexOf("people/my")) {
    let e = JSON.parse($response.body);
    e.data.floatingInfo = {}, $done({body: JSON.stringify(e)})
} else if (-1 != $request.url.indexOf("config/v")) {
    let t = JSON.parse($response.body);
    t.data.bottomBarControl.defaultTab = "home", t.data.bottomBarControl.tabs = Object.values(t.data.bottomBarControl.tabs).filter(e => "home" == e.tabType || "new_sports" == e.tabType || "personal" == e.tabType), t.data.homeTabs = [{
        type: "homeRecommend",
        order: 1,
        name: "推荐",
        schema: "keep://homepage/homeRecommend",
        showInFewDays: 7,
        reverseSwitch: !1,
        default: !0
    }, {
        type: "homePrime",
        order: 2,
        name: "会员",
        schema: "keep://coursepage/homePrime",
        showInFewDays: 7,
        reverseSwitch: !1,
        default: !1
    }], $done({body: JSON.stringify(t)})
} else if (-1 != $request.url.indexOf("homepage/v")) {
    let n = JSON.parse($response.body);
    if (n.data.sections.length > 0 && "quickEntranceV3" != n.data.sections[0].contentStyle) {
        var a = {
            sectionStyle: null,
            contentStyle: "quickEntranceV3",
            pageId: "",
            pitId: null,
            sectionId: null,
            location: "entrance",
            pageNum: 0,
            moduleNum: 0,
            bizType: null,
            backgroundImage: null,
            sectionTrackProps: {
                content_style: "quickEntranceV3",
                pageType: "homeRecommend",
                section_id: null,
                sectionTitle: "品类入口",
                itemDetailId: "",
                pageVersion: "8.0",
                page_index: 0,
                page_plan_id: "",
                sectionPosition: 0,
                sectionType: "categoryEntry"
            },
            moreText: null,
            priority: 0,
            index: 0,
            schema: null,
            title: null,
            subBaseSection: null,
            showUserSettingSwitch: !0,
            quickEntrances: [{
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.0",
                    itemTitle: "跳绳",
                    item_type: "smartrope",
                    itemPosition: 0
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/4/553246736447566b5831396d774a726d4944386a5763754d4e7243573943632f72766b72713243377433733d/210x174_be8314bcf2ddadaa91d64df15b8179410024b0cc.png",
                iconInner: "https://static1.keepcdn.com/kylin-cms/2022/11/22/16/40/553246736447566b5831394749734e746f305572724d59745a4f52724b37623655326668714f45504637673d/108x108_bed15c8355030f96af69226270bcc4d508b73375.png",
                type: "smartrope",
                schema: "keep://subpage/home?categoryType=jumprope&amp;source=page_home&amp;isPreview=false",
                title: "跳绳",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.1",
                    itemTitle: "跑步",
                    item_type: "running",
                    itemPosition: 1
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/1/553246736447566b58312f39463164783279354b67734b4c7958796e354f32736a2b5a7576306867512b593d/210x174_1a6d2547a58966dbdea3322795acdc2bba24e889.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/21/20/30/298362495336_108x108.png",
                type: "running",
                schema: "keep://homepage/running?tabId=cnVubmluZw==&amp;style=tab&amp;trainingTrace=categoryEntry&amp;source=categoryEntry",
                title: "跑步",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.2",
                    itemTitle: "行走",
                    item_type: "hiking",
                    itemPosition: 2
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/1/553246736447566b583138396362694a75476b7567306d6b373158632b4c635635713847456b56325542303d/210x174_990cd347017ad1a7ba63688b96aa64ed9b7ed824.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/22/10/19/79547768652_108x108.png",
                type: "hiking",
                schema: "keep://homepage/hiking?tabId=aGlraW5n&amp;new=true&amp;trainingTrace=categoryEntry&amp;source=categoryEntry",
                title: "行走",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.3",
                    itemTitle: "骑行",
                    item_type: "cycling",
                    itemPosition: 3
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/1/553246736447566b583139376d6c764e3637682b4c584c36544d45466c574e556d744f6e443257534435303d/210x174_495638b7a4224c14fde4ee5c88173b32db09c8f2.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/22/10/19/795794009923_108x108.png",
                type: "cycling",
                schema: "keep://homepage/cycling?tabId=Y3ljbGluZw==&amp;new=true&amp;trainingTrace=categoryEntry&amp;source=categoryEntry",
                title: "骑行",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.4",
                    itemTitle: "助眠冥想",
                    item_type: "meditation",
                    itemPosition: 4
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/18/38/553246736447566b58313961757053466470325955426a4353427a45627874396d4f6e5144616579646c413d/210x174_c946a5440299cc439ce103629eb9498c120c060e.png",
                iconInner: "https://static1.keepcdn.com/kylin-cms/2022/11/22/16/27/553246736447566b58312f45336d7949654768352f79793358552f7535797462774e78574e345a3152486f3d/108x108_0e012a0f0154208c791abd0509c5a2ae19c5d40e.png",
                type: "meditation",
                schema: "keep://subpage/home?categoryType=meditation&amp;source=page_home&amp;isPreview=false",
                title: "助眠冥想",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.5",
                    itemTitle: "瑜伽",
                    item_type: "yoga",
                    itemPosition: 5
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/1/553246736447566b58312b5173386d5766432f395932726e7a5130523867676676442b463139385462514d3d/210x174_6455aa0d0da392b4dcb1ae02faa7a6de3b12b74a.png",
                iconInner: "https://static1.keepcdn.com/kylin-cms/2022/11/10/12/35/553246736447566b58313863714d4b313937715338352b6d653032397858705371596d4873385752486b733d/108x108_4cc973b47b99b7ba40ad7e37226c5a07e08be1ed.png",
                type: "yoga",
                schema: "keep://subpage/home?categoryType=yoga&amp;source=home_recommend",
                title: "瑜伽",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.6",
                    itemTitle: "塑形训练",
                    item_type: "bodybuilding",
                    itemPosition: 6
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/2/553246736447566b58313848692f6245626c4c72764d4e6b2b3948727a44784a727857427a6b7a326a616b3d/210x174_9537eca338eda8e0d51c40e63378d73743ae2e39.png",
                iconInner: "https://static1.keepcdn.com/kylin-cms/2022/11/22/16/45/553246736447566b58313843613174565a6962313166665a5666366770765342447368786a4c61377879673d/108x108_b9315d9c9915931c8bdfddbeed40b8c1b7410fa6.png",
                type: "bodybuilding",
                schema: "keep://subpage/home?categoryType=bodybuilding&amp;source=page_home&amp;isPreview=false",
                title: "塑形训练",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.7",
                    itemTitle: "趣味课",
                    item_type: "games",
                    itemPosition: 7
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/15/553246736447566b58312b6a326a4432784770777256325373413073464168336753746159436c364f70453d/210x174_efc0141893630618ab491c34999b5b64506ee721.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2022/8/26/16/13/553246736447566b58313956386b78707053647a4869527078506d3863736f4c5771557433436445556b673d/108x108_17b1fb9c0175415962aa4582a9deb9baeac0a663.png",
                type: "games",
                schema: "https://m.gotokeep.com/live-activity/games/center?fullscreen=true&amp;source=home_quickStart",
                title: "趣味课",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.8",
                    itemTitle: "呼啦圈",
                    item_type: "smarthulahoop",
                    itemPosition: 8
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/11/22/16/50/553246736447566b58312b436f7931697352694a32653235597378695a39677533515a7630485a556345383d/210x174_d09af7f584c060e3bf20f5713382fb4e502993db.png",
                iconInner: "https://static1.keepcdn.com/kylin-cms/2022/11/22/16/50/553246736447566b58312b64724d4c6a536d65436f5736434162693172694f6273336268564c355350634d3d/108x108_eb24e19577e617b521363b73363cfc85affa0616.png",
                type: "smarthulahoop",
                schema: "keep://subpage/home?categoryType=hulahoop&amp;source=page_home&amp;isPreview=false",
                title: "呼啦圈",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.9",
                    itemTitle: "跑步机",
                    item_type: "keloton",
                    itemPosition: 9
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/5/553246736447566b583138546267467857467a5134322b77685252514656662b504351395278655a6c41513d/210x174_f146aad28baf15d9a967507fb6e8b92cb647a105.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/22/10/20/79638592490_108x108.png",
                type: "keloton",
                schema: "keep://homepage/keloton?tabId=keloton",
                title: "跑步机",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.10",
                    itemTitle: "动感单车",
                    item_type: "puncheur",
                    itemPosition: 10
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/5/553246736447566b58313855655a534a706f48447154597675417570646e466c64694337715968325374553d/210x174_d9682832608569e7bfdf8e099a6a4fb271cdd814.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2022/4/1/16/36/79214849d54a4c4df7830379af74a37bbe952e55_108x108_9e25f3e357ad724a7b06ca568472c181876cb773.png",
                type: "puncheur",
                schema: "keep://homepage/puncheur?tabId=puncheur",
                title: "动感单车",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.11",
                    itemTitle: "椭圆机",
                    item_type: "elliptical",
                    itemPosition: 11
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/5/553246736447566b58312b62724c324c6a643154702f50654447626636676b526262636f5651504f52746b3d/210x174_777c3a7262a4390e851fb1c0005540f824149ac4.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2022/4/1/16/34/79214849d54a4c4df7830379af74a37bbe952e55_108x108_93972c09e24276111935364f32f58da9f0b6dfd0.png",
                type: "elliptical",
                schema: "keep://koval/main",
                title: "椭圆机",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.12",
                    itemTitle: "健走机",
                    item_type: "walkman",
                    itemPosition: 12
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/6/553246736447566b58312b7a43783335705a5257533431356c61475a76416f2f4a30647a7a47584235636f3d/210x174_31eab9bbbc0c46611911645b7a04e4007752bfe9.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/23/11/40/708221831818_108x108.png",
                type: "walkman",
                schema: "keep://homepage/walkman?tabId=walkman",
                title: "健走机",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.13",
                    itemTitle: "练器械",
                    item_type: "equipment_class",
                    itemPosition: 13
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/6/553246736447566b58313948413149376f6d4d4f3065575338374d50716261744f544867773448496b726b3d/210x174_eb833711c3e4896f61dcb636bf0381266e3b4db5.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/8/20/11/53/79214849d54a4c4df7830379af74a37bbe952e55_108x108_9e353657a04c932a7c07e8221d3ef6d09be02989.png",
                type: "equipment_class",
                schema: "keep://equipment/equipment_training",
                title: "练器械",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }, {
                itemTrackProps: {
                    itemId: null,
                    spm: "keep.homepage.quickEntrance.14",
                    itemTitle: "Keepland",
                    item_type: "uni_web_keepland",
                    itemPosition: 14
                },
                icon: "https://static1.keepcdn.com/kylin-cms/2022/12/7/20/7/553246736447566b58313848583836333869584239486c564552317272753876574a43345445306b632f773d/210x174_af8fa993c3b4c33a073d99f791748b3f44a623b2.png",
                iconInner: "https://static1.keepcdn.com/infra-cms/2021/03/21/20/29/297988776391_108x108.png",
                type: "uni_web_keepland",
                schema: "https://keepland.gotokeep.com?kpwebbarcolor=0xffffff&amp;kpwebbtntitlecolor=0x584F60",
                title: "Keepland",
                iconLinkFormat: null,
                showTimes: 0,
                bubbleId: null,
                bubbleText: null,
                bubble: null,
                newBubbleId: null,
                showInFewDays: 0
            }]
        };
        n.data.sections.unshift(a)
    }
    $done({body: JSON.stringify(n)})
} else if (-1 != $request.url.indexOf("preview")) {
    let i = JSON.parse($response.body);
    i.data.detailSections = Object.values(i.data.detailSections).filter(e => "recommendation" != e.sectionType), $done({body: JSON.stringify(i)})
} else if (-1 != $request.url.indexOf("sportpage/sport/v")) {
    let l = JSON.parse($response.body);
    l.data.sections && delete l.data.sections, $done({body: JSON.stringify(l)})
} else $done();