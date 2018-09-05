const Mock = require('mockjs');

const { Random } = Mock;
const xlightningMenus = [
    {
        title: "定期数据",
        children: [
            {
                title: "定期基础数据",
                key: "addrate_basic",
            },
            {
                title: "定期未来到期数据",
                key: "regularFuture",
            },
            {
                title: "七天计划",
                link: "/sys/frame",
                key: "seven_plan",
            },
        ]
    },
    {
        title: "交易明细",
        children: [
            {
                title: "基础交易数据",
                key: "transactionDetails_basic",
            },
            {
                title: "交易转化",
                link: "/sys/frame",
                key: "transactionDetail_conversion",
            },
            {
                title: "刷子用户",
                link: "/sys/frame",
                key: "brush_user",
            },
        ]
    },
    {
        title: "活动",
        children: [
            {
                title: "体验金",
                key: "experienceMoney",
            },
            {
                title: "邀请转化",
                key: "invite_inviteConversion",
            },
            {
                title: "受邀用户基础数据",
                key: "invite_inviteBasicData",
            },
            {
                title: "历史活动分析",
                key: "activityTopic",
            },
            {
                title: "体验金激活效果",
                link: "/sys/frame",
            },
        ]
    },
    {
        title: "生活场景",
        children: [
            {
                title: "梦想计划",
                key: "dreamPlan",
            },
            {
                title: "工资计划",
                key: "salaryPlan",
            },
            {
                title: "房租房贷计划",
                key: "housePlan",
            },
            {
                title: "简生活",
                key: "life_Jianlc",
            },
        ]
    },
    {
        title: "渠道",
        children: [
            {
                title: "渠道推广",
                key: "Channel01_promotion",
            },
            {
                title: "今日渠道",
                key: "channel",
            },
            {
                title: "渠道组推广",
                key: "Channel02_promotion",
            },
            {
                title: "市场部推广",
                key: "Market01_promotion",
            },
            {
                title: "渠道质量",
                key: "Channel04_promotion",
            },
            {
                title: "渠道组汇总",
                key: "Channel03_promotion",
            },
            {
                title: "渠道留存转化",
                key: "Channel05_promotion",
            },
            {
                title: "渠道外呼转换",
                key: "crm_transform",
            },
        ]
    },
    {
        title: "支付通道",
        children: [
            {
                title: "支付概况",
                key: "pay_channel_main",
            },
            {
                title: "支付通道详情",
                key: "paychannel_channel",
            },
            {
                title: "绑卡概况",
                key: "payment_open",
            },
            {
                title: "信用卡绑卡概况",
                key: "credit_card_basic",
            },
            {
                title: "信用卡预约概况",
                key: "credit_card_reservation",
            },
        ]
    },
    {
        title: "流动性",
        children: [
            {
                title: "流动性分析",
                key: "hour",
            },
            {
                title: "分级用户交易",
                key: "Mobility_level",
            },
        ]
    },
    {
        title: "用户行为",
        children: [
            {
                title: "用户活跃",
                key: "userbehave_activity",
            },
            {
                title: "用户留存",
                key: "user_stand",
            },
            {
                title: "事件统计",
                key: "appEvent",
            },
            {
                title: "事件转化",
                key: "eventChange",
            },
            {
                title: "用户时间",
                key: "use_time",
            },
            {
                title: "用户标签详情",
                key: "dirMonitoring",
            },
            {
                title: "用户事件详情",
                key: "userEvent",
            },
        ]
    },
    {
        title: "流量分析",
        children: [
            {
                title: "活动流量分析",
                key: "pageAnalyse",
            },
            {
                title: "全站流量",
                key: "natural_flow",
            },
        ]
    },
    {
        title: "沃百富",
        children: [
            {
                title: "沃百富概况",
                key: "wbf_general",
            },
            {
                title: "沃百富交易明细",
                key: "wbf_transactiondetails",
            },
            {
                title: "沃百富流动性分析",
                key: "wbfHour",
            },
            {
                title: "沃百富今日实时数据",
                key: "wbf_hour",
            },
            {
                title: "沃百富定期概况",
                key: "wbf_regular",
            },
        ]
    },
    {
        title: "拾年宝",
        children: [
            {
                title: "人数分析",
                key: "user_analysis",
            },
            {
                title: "金额分析",
                key: "amount_analysis",
            },
        ]
    },
    {
        title: "财务数据",
        children: [
            {
                title: "存量概况",
                key: "financeProBasic",
            },
            {
                title: "成本概况",
                key: "costBasic",
            },
            {
                title: "加息权责成本",
                key: "raiseBasic",
            },
        ]
    },
    {
        title: "天天房东",
        children: [
            {
                title: "人数分析",
                key: "user",
            },
            {
                title: "金额分析",
                link: "/sys/frame",
                key: "amount",
            },
            {
                title: "存量分析",
                key: "ttfd_stock",
            },
        ]
    }
];

const menus = {
    columns: [
        {
            field: "title",
            name: "标题名",
            type: "string"
        },
        {
            field: "key",
            name: "菜单id",
            type: "string"
        },
    ],
    rows: [
        {
            title: "首页",
            key: "home",
        },
        {
            title: "路径分析",
            key: "pathAnalysis",
        },
        {
            title: "大屏分析",
            children: [
                {
                    title: "提现概况分析概览",
                    key: "analysis2",
                },
                {
                    title: "当前业务状况及趋势",
                    key: "analysis",
                },
            ]
        },
        ...xlightningMenus
    ]
};
const info = Mock.mock({
    data: {
        menus,
        userInfo: {
            userName: Random.name(),
        },
        message: {
            news: Random.cparagraph(17, 30),
            'count|18-32': 1
        },
    },
    status: 0
});
module.exports = {
    [`POST /getSysInfo`](req, res) {
        res.status(200).json(info);
    },
    [`GET /logout`](req, res) {
        res.status(200).json({
            data: {},
            status: 0
        });
    }
};