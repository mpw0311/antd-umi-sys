const Mock = require('mockjs');//eslint-disable-line
const pathdata = {
    nodes: [
        {
            name: "Total",
            value: "123123213"
        },
        {
            name: "Environment",
            value: "123123213"
        },
        {
            name: "Land use",
            value: "123123"
        },
        {
            name: "Cocoa butter (Organic)",
            value: "9999888"
        },
        {
            name: "Cocoa mass (Organic)",
            value: "1231239900"
        },
        {
            name: "Hazelnuts (Organic)",
            value: "12qwewqe"
        },
        {
            name: "Cane sugar (Organic)",
            value: "opopopo"
        },
        {
            name: "Vegetables (Organic)",
            value: "poipoijio"
        },
        {
            name: "Climate change",
            value: "pppplllll"
        },
        {
            name: "Harmful substances",
            value: "1231239900"
        },
        {
            name: "Water use",
            value: "1231239900"
        },
        {
            name: "Resource depletion",
            value: "1231239900"
        },
        {
            name: "Refrigeration",
            value: "1231239900"
        },
        {
            name: "Packaging",
            value: "1231239900"
        },
        {
            name: "Human rights",
            value: "1231239900"
        },
        {
            name: "Child labour",
            value: "1231239900"
        },
        {
            name: "Coconut oil (Organic)",
            value: "1231239900"
        },
        {
            name: "Forced labour",
            value: "1231239900"
        },
        {
            name: "Health safety",
            value: "1231239900"
        },
        {
            name: "Access to water",
            value: "1231239900"
        },
        {
            name: "Freedom of association",
            value: "1231239900"
        },
        {
            name: "Access to land",
            value: "1231239900"
        },
        {
            name: "Sufficient wage",
            value: "1231239900"
        },
        {
            name: "Equal rights migrants",
            value: "1231239900"
        },
        {
            name: "Discrimination",
            value: "1231239900"
        },
        {
            name: "Working hours",
            value: "1231239900"
        }
    ],
    links: [
        {
            source: "Total",
            target: "Environment",
            value: 0.342284047256003
        },
        {
            source: "Environment",
            target: "Land use",
            value: 0.32322870366987
        },
        {
            source: "Land use",
            target: "Cocoa butter (Organic)",
            value: 0.177682517071359
        },
        {
            source: "Land use",
            target: "Cocoa mass (Organic)",
            value: 0.137241325342711
        },
        {
            source: "Land use",
            target: "Hazelnuts (Organic)",
            value: 0.00433076373512774
        },
        {
            source: "Land use",
            target: "Cane sugar (Organic)",
            value: 0.00296956039863467
        },
        {
            source: "Land use",
            target: "Vegetables (Organic)",
            value: 0.00100453712203756
        },
        {
            source: "Environment",
            target: "Climate change",
            value: 0.0112886157414413
        },
        {
            source: "Climate change",
            target: "Cocoa butter (Organic)",
            value: 0.00676852971933996
        },
        {
            source: "Climate change",
            target: "Cocoa mass (Organic)",
            value: 0.00394686874786743
        },
        {
            source: "Climate change",
            target: "Cane sugar (Organic)",
            value: 0.000315972058711838
        },
        {
            source: "Climate change",
            target: "Hazelnuts (Organic)",
            value: 0.000218969462265292
        },
        {
            source: "Climate change",
            target: "Vegetables (Organic)",
            value: 0.0000382757532567656
        },
        {
            source: "Environment",
            target: "Harmful substances",
            value: 0.00604275542495656
        },
        {
            source: "Harmful substances",
            target: "Cocoa mass (Organic)",
            value: 0.0055125989240741
        },
        {
            source: "Harmful substances",
            target: "Cocoa butter (Organic)",
            value: 0.000330017607892127
        },
        {
            source: "Harmful substances",
            target: "Cane sugar (Organic)",
            value: 0.000200138892990337
        },
        {
            source: "Harmful substances",
            target: "Hazelnuts (Organic)",
            value: 0
        },
        {
            source: "Harmful substances",
            target: "Vegetables (Organic)",
            value: 0
        },
        {
            source: "Environment",
            target: "Water use",
            value: 0.00148345269044703
        },
        {
            source: "Water use",
            target: "Cocoa butter (Organic)",
            value: 0.00135309891304186
        },
        {
            source: "Water use",
            target: "Cocoa mass (Organic)",
            value: 0.000105714137908639
        },
        {
            source: "Water use",
            target: "Hazelnuts (Organic)",
            value: 0.0000133452642581887
        },
        {
            source: "Water use",
            target: "Cane sugar (Organic)",
            value: 0.00000878074837009238
        },
        {
            source: "Water use",
            target: "Vegetables (Organic)",
            value: 0.0000025136268682477
        },
        {
            source: "Environment",
            target: "Resource depletion",
            value: 0.000240519729288764
        },
        {
            source: "Resource depletion",
            target: "Cane sugar (Organic)",
            value: 0.000226237279345084
        },
        {
            source: "Resource depletion",
            target: "Vegetables (Organic)",
            value: 0.0000142824499436793
        },
        {
            source: "Resource depletion",
            target: "Hazelnuts (Organic)",
            value: 0
        },
        {
            source: "Resource depletion",
            target: "Cocoa mass (Organic)",
            value: 0
        },
        {
            source: "Resource depletion",
            target: "Cocoa butter (Organic)",
            value: 0
        },
        {
            source: "Environment",
            target: "Refrigeration",
            value: 0
        },
        {
            source: "Environment",
            target: "Packaging",
            value: 0
        },
        {
            source: "Total",
            target: "Human rights",
            value: 0.307574096993239
        },
        {
            source: "Human rights",
            target: "Child labour",
            value: 0.0410641202645833
        },
        {
            source: "Child labour",
            target: "Hazelnuts (Organic)",
            value: 0.0105339381639722
        },
        {
            source: "Child labour",
            target: "Cocoa mass (Organic)",
            value: 0.0105
        },
        {
            source: "Child labour",
            target: "Cocoa butter (Organic)",
            value: 0.0087294420777
        },
        {
            source: "Child labour",
            target: "Coconut oil (Organic)",
            value: 0.00474399974233333
        },
        {
            source: "Child labour",
            target: "Cane sugar (Organic)",
            value: 0.00388226450884445
        },
        {
            source: "Child labour",
            target: "Vegetables (Organic)",
            value: 0.00267447577173333
        },
        {
            source: "Human rights",
            target: "Forced labour",
            value: 0.0365458590642445
        },
        {
            source: "Forced labour",
            target: "Hazelnuts (Organic)",
            value: 0.0114913076376389
        },
        {
            source: "Forced labour",
            target: "Cocoa butter (Organic)",
            value: 0.0081134807347
        },
        {
            source: "Forced labour",
            target: "Cocoa mass (Organic)",
            value: 0.00765230236575
        },
        {
            source: "Forced labour",
            target: "Cane sugar (Organic)",
            value: 0.004
        },
        {
            source: "Forced labour",
            target: "Vegetables (Organic)",
            value: 0.00296668823626667
        },
        {
            source: "Forced labour",
            target: "Coconut oil (Organic)",
            value: 0.00232208008988889
        },
        {
            source: "Human rights",
            target: "Health safety",
            value: 0.0345435327843611
        },
        {
            source: "Health safety",
            target: "Hazelnuts (Organic)",
            value: 0.0121419536385
        },
        {
            source: "Health safety",
            target: "Cocoa mass (Organic)",
            value: 0.00766772850678333
        },
        {
            source: "Health safety",
            target: "Cocoa butter (Organic)",
            value: 0.0056245892061
        },
        {
            source: "Health safety",
            target: "Coconut oil (Organic)",
            value: 0.00361616847688889
        },
        {
            source: "Health safety",
            target: "Cane sugar (Organic)",
            value: 0.00277374682533333
        },
        {
            source: "Health safety",
            target: "Vegetables (Organic)",
            value: 0.00271934613075556
        },
        {
            source: "Human rights",
            target: "Access to water",
            value: 0.0340206659360667
        },
        {
            source: "Access to water",
            target: "Cocoa mass (Organic)",
            value: 0.0105
        },
        {
            source: "Access to water",
            target: "Cocoa butter (Organic)",
            value: 0.0089274160792
        },
        {
            source: "Access to water",
            target: "Hazelnuts (Organic)",
            value: 0.0054148022845
        },
        {
            source: "Access to water",
            target: "Cane sugar (Organic)",
            value: 0.00333938149786667
        },
        {
            source: "Access to water",
            target: "Vegetables (Organic)",
            value: 0.00314663377488889
        },
        {
            source: "Access to water",
            target: "Coconut oil (Organic)",
            value: 0.00269243229961111
        },
        {
            source: "Human rights",
            target: "Freedom of association",
            value: 0.0320571523941667
        },
        {
            source: "Freedom of association",
            target: "Hazelnuts (Organic)",
            value: 0.0132312483463611
        },
        {
            source: "Freedom of association",
            target: "Cocoa butter (Organic)",
            value: 0.0077695200707
        },
        {
            source: "Freedom of association",
            target: "Cocoa mass (Organic)",
            value: 0.00510606573995
        },
        {
            source: "Freedom of association",
            target: "Vegetables (Organic)",
            value: 0.00354321156324444
        },
        {
            source: "Freedom of association",
            target: "Cane sugar (Organic)",
            value: 0.00240710667391111
        },
        {
            source: "Freedom of association",
            target: "Coconut oil (Organic)",
            value: 0
        },
        {
            source: "Human rights",
            target: "Access to land",
            value: 0.0315022209894056
        },
        {
            source: "Access to land",
            target: "Hazelnuts (Organic)",
            value: 0.00964970063322223
        },
        {
            source: "Access to land",
            target: "Cocoa mass (Organic)",
            value: 0.00938530207965
        },
        {
            source: "Access to land",
            target: "Cocoa butter (Organic)",
            value: 0.0060110791848
        },
        {
            source: "Access to land",
            target: "Cane sugar (Organic)",
            value: 0.00380818314608889
        },
        {
            source: "Access to land",
            target: "Vegetables (Organic)",
            value: 0.00264795594564445
        },
        {
            source: "Access to land",
            target: "Coconut oil (Organic)",
            value: 0
        },
        {
            source: "Human rights",
            target: "Sufficient wage",
            value: 0.0287776757227333
        },
        {
            source: "Sufficient wage",
            target: "Cocoa mass (Organic)",
            value: 0.00883512456493333
        },
        {
            source: "Sufficient wage",
            target: "Cocoa butter (Organic)",
            value: 0.0078343367268
        },
        {
            source: "Sufficient wage",
            target: "Coconut oil (Organic)",
            value: 0.00347879026511111
        },
        {
            source: "Sufficient wage",
            target: "Hazelnuts (Organic)",
            value: 0.00316254211388889
        },
        {
            source: "Sufficient wage",
            target: "Vegetables (Organic)",
            value: 0.00281013722808889
        },
        {
            source: "Sufficient wage",
            target: "Cane sugar (Organic)",
            value: 0.00265674482391111
        },
        {
            source: "Human rights",
            target: "Equal rights migrants",
            value: 0.0271146645119444
        },
        {
            source: "Equal rights migrants",
            target: "Cocoa butter (Organic)",
            value: 0.0071042315061
        },
        {
            source: "Equal rights migrants",
            target: "Cocoa mass (Organic)",
            value: 0.00636673210005
        },
        {
            source: "Equal rights migrants",
            target: "Hazelnuts (Organic)",
            value: 0.00601459775836111
        },
        {
            source: "Equal rights migrants",
            target: "Coconut oil (Organic)",
            value: 0.00429185583138889
        },
        {
            source: "Equal rights migrants",
            target: "Cane sugar (Organic)",
            value: 0.00182647471915556
        },
        {
            source: "Equal rights migrants",
            target: "Vegetables (Organic)",
            value: 0.00151077259688889
        },
        {
            source: "Human rights",
            target: "Discrimination",
            value: 0.0211217763359833
        },
        {
            source: "Discrimination",
            target: "Cocoa mass (Organic)",
            value: 0.00609671700306667
        },
        {
            source: "Discrimination",
            target: "Cocoa butter (Organic)",
            value: 0.0047738806325
        },
        {
            source: "Discrimination",
            target: "Coconut oil (Organic)",
            value: 0.00368119084494444
        },
        {
            source: "Discrimination",
            target: "Vegetables (Organic)",
            value: 0.00286009813604444
        },
        {
            source: "Discrimination",
            target: "Cane sugar (Organic)",
            value: 0.00283706180951111
        },
        {
            source: "Discrimination",
            target: "Hazelnuts (Organic)",
            value: 0.000872827909916666
        },
        {
            source: "Human rights",
            target: "Working hours",
            value: 0.02082642898975
        },
        {
            source: "Working hours",
            target: "Hazelnuts (Organic)",
            value: 0.0107216773848333
        },
        {
            source: "Working hours",
            target: "Coconut oil (Organic)",
            value: 0.00359009052944444
        },
        {
            source: "Working hours",
            target: "Vegetables (Organic)",
            value: 0.00212300379075556
        },
        {
            source: "Working hours",
            target: "Cocoa butter (Organic)",
            value: 0.0018518584356
        },
        {
            source: "Working hours",
            target: "Cocoa mass (Organic)",
            value: 0.00158227069058333
        },
        {
            source: "Working hours",
            target: "Cane sugar (Organic)",
            value: 0.000957528158533333
        }
    ]
};
const path = {
    "pageDict": ["YKHomeViewController", "YKMainActivity", "m.jianlc.com/app/addrate.html", "YKSevenDaysPlanDetailViewController", "h5.jianlc.com/activity/shiNianBao/index.html", "YKTokenErrorDialog", "YKTradeRecordActivity", "m.jianlc.com/app/invite_circle.html", "YKAddSevenDaysPlanDetailController", "YKMyBankCardsViewController", "YKDiscoveryViewController", "m.jianlc.com/app/buyIn/extract.html", "YKDialogViewController", "YKMySettingViewController", "YKLayerPopActivity", "m.jianlc.com/activity/birthdayV2/index.html", "m.jianlc.com/app/buyIn/bigAmount.html", "YKFingerPrintActivity", "m.jianlc.com/app/notice.html?id=5194E1244FD445D79502443DF5B127A3", "m.jianlc.com/app/notice.html?id=0E34E9F72D48490A901FB498CC94F2C9", "m.jianlc.com/app/notice.html?id=AB2561FA6570461F8227C0279A0F51A6", "m.jianlc.com/app/buyIn/interestRule.html", "m.jianlc.com/app/notice.html?id=C7FF6E20F6FF49BDB5B49A376FB574D4", "YKLoginCodeActivity", "YKAboutActivity", "ad.jianlc.com/channelh5/create/html/1536216200877.html", "YKDemandDetailActivity", "YKAnnouncementListActivity", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=5fdc3c392db64b27a4bc7040231ca734&timeStamp=1536215418492", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=9e1526e7f91e43e9b7e5763d26282e21&timeStamp=1536648688842", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=c91fafe9f57742028b14794d1075e555&timeStamp=1536634372429", "YKGestureActivity", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=3e1f9579a06e4b759307f57c6104d5e6&timeStamp=1536632088477", "YKLoginActivity", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=7d04453129cc4b2da6046133d2ec0a46&timeStamp=1536678778321", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=911d00886d604007bc8bb88d0777b07c&timeStamp=1536243179349", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=77e28a2453f14cb991e09675dc84c8ec&timeStamp=1536629926772", "m.jianlc.com/app/newUser/poster.html", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=0f6fb31bb57242f2a258b6cfdb9e76cb&timeStamp=1536648787947", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=c60d03f086db4a03b2049ddd603d0152&timeStamp=1536196726423", "m.jianlc.com/app/notice.html?id=E6E134D76F40423F9F1709A6EDBFE97F", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=db00710924a5497fb0de2397f962993a&timeStamp=1536668223969", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=2be0a67462d6460489d307f9ba6307f3&timeStamp=1536200630499", "YKOpenNoticeViewController", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=0400aa168e2c45358e66ca78bf22cb6d&timeStamp=1536566246297", "YKWKWebViewController", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=43773448fecc43238867644d60751741&timeStamp=1536554484102", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?thirdUserId=&newVersion=3.9.7&newVersion=3.9.7", "m.jianlc.com/app/assetYesterdayIncomeNew.html", "pic.jianlc.com/shiNianBao/index.html", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=75bd3fc9fd844587a107e25d7845e2c7&timeStamp=1536582668084", "YKTurnInAddRateActivity", "m.jianlc.com/app/notice.html?id=F15B24639B9A4A2695B821D35798C3B0", "h5.ifastps.com.cn/jlc/app/html/app/fundation/Index/index.html?userId=48891e71044f41c9a5a2d60f23221213&timeStamp=1536534994685", "YKListDetailActivity", "YKGiveMePraiseController", "YKEarningsActivity", "YKSevenDaysPlanTradeRecordActivity", "YKAddRateActivity", "YKWithDrawActivity", "YKTurnResultActivity", "m.jianlc.com/app/assetJianMatched.html", "YKAccountViewController", "YKPasswordCheckActivity", "YKAddRateAssetsViewController", "YKAddRateDetailViewController", "YKHomeTotalAssetsCurrentViewController", "YKSevenDaysPlanAssetsViewController", "m.jianlc.com/app/mygold.html", "YKSettingActivity", "YKPlanListViewController", "YKSevenDaysPlanDetailActivity", "YKAddRateInfoViewController", "m.tiantianfangdong.com/?userId=&token=", "YKCurrentBabyViewController", "YKVersionUpdateViewController", "m.jianlc.com/activity/jBaoStory/jianClass.html", "YKMyBankCardListActivity", "m.jianlc.com/activity/shiNianBao/index.html", "YKSecondRegistViewController", "pic.jianlc.com/shiNianBao/index/index.html", "YKMediaReportsListController", "YKNotificationViewController", "YKWithdrawalsViewController", "YKFirstRegistViewController", "YKHomeTotalEarningsViewController", "YKHomeMaskProductViewController", "YKAnnouncementsViewController", "YKTradeRecordsViewController", "YKAccountWithDrawsLayerController", "m.jianlc.com/activity/jianClass/safeInfo.html", "m.jianlc.com/app/safe.html", "m.jianlc.com/activity/team/index.html", "m.jianlc.com/activity/hotActivity/index.html", "m.jianlc.com/app/assetTotalDetails.html"],
    "eventDict": ["open001", "register000", "homepage02", "homepage02014", "homepage02018", "homepage02019", "homepage02001", "homepage02004", "homepage01014", "homepage01010", "register012", "account001", "homepage01016", "homepage01004", "finance01", "redeem003", "homepage01040", "startupscreen001", "register013", "homepage01005", "account017", "mine01016", "mine01010", "register003", "register008", "register007", "register005", "set01007", "regular02005", "homepage01", "homepage02003", "register001", "assets01004", "register017", "changeNumber02001", "register002", "homepage01017", "homepage02015", "homepage01007", "homepage01019", "homepage01013", "homepage01008", "homepage01041", "homepage01011", "regular_01", "discovery01", "seven01001", "seven01002", "details02008", "plan01", "mine01021", "withdrawLog001", "redeem000", "withdrawLog003", "withdrawLog002", "records01006", "set01010", "homepage01015", "mine01017", "account000", "card01", "mine01011", "records01005", "exit002", "assets01008", "mine01002", "mine01022", "assets01009", "mine01", "homepage01001", "gold01001", "homepage01002"]
};
module.exports = {
    [`POST /getPath`](req, res) {
        console.log(req);
        res.status(200).json({
            data: {
                pathData: [pathdata],
                eventData: [pathdata]
            },
            status: 0
        });
    },
    [`POST /getPathDict`](req, res) {
        console.log(req);
        res.status(200).json({
            data: path,
            status: 0
        });
    },
};