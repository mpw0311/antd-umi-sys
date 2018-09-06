import { apiPrefix } from 'config';
export default [
    {
        title: "汇总数据",
        key: "huizongshuju",
        icon: "home",
        children: [
            {
                title: "交易",
                link: "/sys/frame",
                key: "summryData_transaction",
                icon: "shop",
                url: `${apiPrefix}/offline/summryData_transaction`,
            }, {
                title: "用户",
                link: "/sys/frame",
                key: "summryData_user",
                icon: "user",
                url: `${apiPrefix}/offline/summryData_user`
            },
            {
                title: "存量",
                link: "/sys/frame",
                key: "summryData_stock",
                icon: "save",
                url: `${apiPrefix}/offline/summryData_stock`
            },
            {
                title: "历史累计",
                link: "/sys/frame",
                key: "summryData_history",
                icon: "exception",
                url: `${apiPrefix}/offline/summryData_history`
            },
            {
                title: "简理财今日实时数据",
                link: "/sys/frame",
                key: "jlcHour",
                icon: "book",
                url: `${apiPrefix}/online/jlcHour`
            },
            {
                title: "新增存量",
                link: "/sys/frame",
                key: "proPremium",
                icon: "book",
                url: `${apiPrefix}/premiumOffline/proPremium`
            },
            {
                title: "收益及成本概况",
                link: "/sys/frame",
                key: "income_cost_survey",
                icon: "book",
                url: `${apiPrefix}/offline/income_cost_survey`
            },
            {
                title: "特殊事件",
                link: "/sys/frame",
                key: "special_event",
                icon: "book",
                url: `${apiPrefix}/specialEventOffline/special_event`
            },
            {
                title: "鹰眼计划",
                link: "/sys/frame",
                key: "HarkEyePlan",
                icon: "book",
                url: `${apiPrefix}/harkOffline/HarkEyePlan`
            },
        ]
    },
    {
        title: "实时分析",
        key: "shishifenxi",
        icon: "pie-chart",
        children: [
            {
                title: "实时概况",
                link: "/sys/frame",
                key: "realBasic",
                icon: "book",
                url: `${apiPrefix}/realOffline/realBasic`
            }
        ]
    },
    {
        title: "资产匹配",
        key: "zichanpipei",
        icon: "pay-circle-o",
        children: [
            {
                title: "匹配额度分析",
                key: "match_analysis",
                link: "/sys/match_analysis",
                icon: "calculator",
            },
            {
                title: "资产匹配概况",
                link: "/sys/frame",
                key: "user_assets_match",
                icon: "book",
                url: `${apiPrefix}/assetsOffline/user_assets_match`
            },
            {
                title: "资产匹配效率分析",
                link: "/sys/frame",
                key: "match_efficiency_analyse",
                icon: "book",
                url: `${apiPrefix}/matchOffline/match_efficiency_analyse`
            },
        ]
    },
    {
        title: "定期数据",
        key: "dingqishuju",
        icon: "database",
        children: [
            {
                title: "定期基础数据",
                link: "/sys/frame",
                key: "addrate_basic",
                icon: "book",
                url: `${apiPrefix}/offline/addrate_basic`
            },
            {
                title: "定期未来到期数据",
                link: "/sys/frame",
                key: "regularFuture",
                icon: "book",
                url: `${apiPrefix}/online/regularFuture`
            },
            {
                title: "七天计划",
                link: "/sys/frame",
                key: "seven_plan",
                icon: "book",
                url: `${apiPrefix}/offline/seven_plan`
            },
        ]
    },
    {
        title: "交易明细",
        key: "jiaoyimingxi",
        icon: "table",
        children: [
            {
                title: "基础交易数据",
                link: "/sys/frame",
                key: "transactionDetails_basic",
                icon: "book",
                url: `${apiPrefix}/offline/transactionDetails_basic`
            },
            {
                title: "交易转化",
                link: "/sys/frame",
                key: "transactionDetail_conversion",
                icon: "book",
                url: `${apiPrefix}/offline/transactionDetail_conversion`
            },
            {
                title: "刷子用户",
                link: "/sys/frame",
                key: "brush_user",
                icon: "book",
                url: `${apiPrefix}/offline/brush_user`
            },
        ]
    },
    {
        title: "活动",
        key: "huodong",
        icon: "team",
        children: [
            {
                title: "体验金",
                link: "/sys/frame",
                key: "experienceMoney",
                icon: "book",
                url: `${apiPrefix}/offline/experienceMoney`
            },
            {
                title: "邀请转化",
                link: "/sys/frame",
                key: "invite_inviteConversion",
                icon: "book",
                url: `${apiPrefix}/offline/invite_inviteConversion`
            },
            {
                title: "受邀用户基础数据",
                link: "/sys/frame",
                key: "invite_inviteBasicData",
                icon: "book",
                url: `${apiPrefix}/offline/invite_inviteBasicData`
            },
            {
                title: "历史活动分析",
                link: "/sys/frame",
                key: "activityTopic",
                icon: "book",
                url: `${apiPrefix}/activityOffline/activityTopic`
            },
            {
                title: "体验金激活效果",
                link: "/sys/frame",
                key: "Experience_Money",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Experience_Money`
            },
        ]
    },
    {
        title: "生活场景",
        key: "shenghuochangjing",
        icon: "laptop",
        children: [
            {
                title: "梦想计划",
                link: "/sys/frame",
                key: "dreamPlan",
                icon: "book",
                url: `${apiPrefix}/dreamOffline/dreamPlan`
            },
            {
                title: "工资计划",
                link: "/sys/frame",
                key: "salaryPlan",
                icon: "book",
                url: `${apiPrefix}/salaryOffline/salaryPlan`
            },
            {
                title: "房租房贷计划",
                link: "/sys/frame",
                key: "housePlan",
                icon: "book",
                url: `${apiPrefix}/houseOffline/housePlan`
            },
            {
                title: "简生活",
                link: "/sys/frame",
                key: "life_Jianlc",
                icon: "book",
                url: `${apiPrefix}/lifeOffline/life_Jianlc`
            },
        ]
    },
    {
        title: "渠道",
        key: "qudao",
        icon: "fork",
        children: [
            {
                title: "渠道推广",
                link: "/sys/frame",
                key: "Channel01_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Channel01_promotion`
            },
            {
                title: "今日渠道",
                link: "/sys/frame",
                key: "channel",
                icon: "book",
                url: `${apiPrefix}/online/channel`
            },
            {
                title: "渠道组推广",
                link: "/sys/frame",
                key: "Channel02_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Channel02_promotion`
            },
            {
                title: "市场部推广",
                link: "/sys/frame",
                key: "Market01_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Market01_promotion`
            },
            {
                title: "渠道质量",
                link: "/sys/frame",
                key: "Channel04_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Channel04_promotion`
            },
            {
                title: "渠道组汇总",
                link: "/sys/frame",
                key: "Channel03_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Channel03_promotion`
            },
            {
                title: "渠道留存转化",
                link: "/sys/frame",
                key: "Channel05_promotion",
                icon: "book",
                url: `${apiPrefix}/channelOffline/Channel05_promotion`
            },
            {
                title: "渠道外呼转换",
                link: "/sys/frame",
                key: "crm_transform",
                icon: "book",
                url: `${apiPrefix}/crmOffline/crm_transform`
            },
        ]
    },
    {
        title: "支付通道",
        key: "zhifutongdao",
        icon: "qrcode",
        children: [
            {
                title: "支付概况",
                link: "/sys/frame",
                key: "pay_channel_main",
                icon: "book",
                url: `${apiPrefix}/payOffline/pay_channel_main`
            },
            {
                title: "支付通道详情",
                link: "/sys/frame",
                key: "paychannel_channel",
                icon: "book",
                url: `${apiPrefix}/offline/paychannel_channel`
            },
            {
                title: "绑卡概况",
                link: "/sys/frame",
                key: "payment_open",
                icon: "book",
                url: `${apiPrefix}/bankOffline/payment_open`
            },
            {
                title: "信用卡绑卡概况",
                link: "/sys/frame",
                key: "credit_card_basic",
                icon: "book",
                url: `${apiPrefix}/offline/credit_card_basic`
            },
            {
                title: "信用卡预约概况",
                link: "/sys/frame",
                key: "credit_card_reservation",
                icon: "book",
                url: `${apiPrefix}/creditOffline/credit_card_reservation`
            },
        ]
    },
    {
        title: "流动性",
        key: "liudongxing",
        icon: "bars",
        children: [
            {
                title: "流动性分析",
                link: "/sys/frame",
                key: "hour",
                icon: "book",
                url: `${apiPrefix}/online/hour`
            },
            {
                title: "分级用户交易",
                link: "/sys/frame",
                key: "Mobility_level",
                icon: "book",
                url: `${apiPrefix}/offline/Mobility_level`
            },
        ]
    },
    {
        title: "用户行为",
        key: "yonghuxingwei",
        icon: "contacts",
        children: [
            {
                title: "用户活跃",
                link: "/sys/frame",
                key: "userbehave_activity",
                icon: "book",
                url: `${apiPrefix}/offline/userbehave_activity`
            },
            {
                title: "用户留存",
                link: "/sys/frame",
                key: "user_stand",
                icon: "book",
                url: `${apiPrefix}/future/user_stand`
            },
            {
                title: "事件统计",
                link: "/sys/frame",
                key: "appEvent",
                icon: "book",
                url: `${apiPrefix}/eventOffline/appEvent`
            },
            {
                title: "事件转化",
                link: "/sys/frame",
                key: "eventChange",
                icon: "book",
                url: `${apiPrefix}/eventFunnelOffline/eventChange`
            },
            {
                title: "用户时间",
                link: "/sys/frame",
                key: "use_time",
                icon: "book",
                url: `${apiPrefix}/useTimeOffline/use_time`
            },
            {
                title: "用户标签详情",
                link: "/sys/frame",
                key: "dirMonitoring",
                icon: "book",
                url: `${apiPrefix}/online/dirMonitoring`
            },
            {
                title: "用户事件详情",
                link: "/sys/frame",
                key: "userEvent",
                icon: "book",
                url: `${apiPrefix}/online/userEvent`
            },
            {
                title: "路径分析",
                link: "/sys/pathAnalysis",
                key: "pathAnalysis",
                icon: "link"
            },
        ]
    },
    {
        title: "流量分析",
        key: "liuliangfenxi",
        icon: "mobile",
        children: [
            {
                title: "活动流量分析",
                link: "/sys/frame",
                key: "pageAnalyse",
                icon: "bars",
                url: `${apiPrefix}/h5offline/pageAnalyse`
            },
            {
                title: "全站流量",
                link: "/sys/frame",
                key: "natural_flow",
                icon: "bars",
                url: `${apiPrefix}/naturalOffline/natural_flow`
            },
        ]
    },
    {
        title: "沃百富",
        key: "wofubai",
        icon: "bank",
        children: [
            {
                title: "沃百富概况",
                link: "/sys/frame",
                key: "wbf_general",
                icon: "book",
                url: `${apiPrefix}/offline/wbf_general`
            },
            {
                title: "沃百富交易明细",
                link: "/sys/frame",
                key: "wbf_transactiondetails",
                icon: "book",
                url: `${apiPrefix}/offline/wbf_transactiondetails`
            },
            {
                title: "沃百富流动性分析",
                link: "/sys/frame",
                key: "wbfHour",
                icon: "book",
                url: `${apiPrefix}/online/wbfHour`
            },
            {
                title: "沃百富今日实时数据",
                link: "/sys/frame",
                key: "wbf_hour",
                icon: "book",
                url: `${apiPrefix}/online/wbf_hour`
            },
            {
                title: "沃百富定期概况",
                link: "/sys/frame",
                key: "wbf_regular",
                icon: "book",
                url: `${apiPrefix}/regularOffline/wbf_regular`
            },
        ]
    },
    {
        title: "拾年宝",
        key: "shinianbao",
        icon: "bank",
        children: [
            {
                title: "人数分析",
                link: "/sys/frame",
                key: "user_analysis",
                icon: "book",
                url: `${apiPrefix}/offline/user_analysis`
            },
            {
                title: "金额分析",
                link: "/sys/frame",
                key: "amount_analysis",
                icon: "book",
                url: `${apiPrefix}/offline/amount_analysis`
            },
        ]
    },
    {
        title: "财务数据",
        key: "caiwushuju",
        icon: "hdd",
        children: [
            {
                title: "存量概况",
                link: "/sys/frame",
                key: "financeProBasic",
                icon: "book",
                url: `${apiPrefix}/financeOffline/financeProBasic`
            },
            {
                title: "成本概况",
                link: "/sys/frame",
                key: "costBasic",
                icon: "book",
                url: `${apiPrefix}/offline/costBasic`
            },
            {
                title: "加息权责成本",
                link: "/sys/frame",
                key: "raiseBasic",
                icon: "book",
                url: `${apiPrefix}/offline/raiseBasic`
            },
        ]
    },
    {
        title: "天天房东",
        key: "tiantianfangdong",
        icon: "bank",
        children: [
            {
                title: "人数分析",
                link: "/sys/frame",
                key: "user",
                icon: "book",
                url: `${apiPrefix}/offline/user`
            },
            {
                title: "金额分析",
                link: "/sys/frame",
                key: "amount",
                icon: "book",
                url: `${apiPrefix}/offline/amount`
            },
            {
                title: "存量分析",
                link: "/sys/frame",
                key: "ttfd_stock",
                icon: "book",
                url: `${apiPrefix}/offline/ttfd_stock`
            },
        ]
    }
];