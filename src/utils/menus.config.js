export default {
    columns: [
        {
            field: "title",
            name: "标题名",
            type: "string"
        },
        {
            field: "link",
            name: "pathname",
            type: "string"
        },
        {
            field: "key",
            name: "菜单id",
            type: "string"
        },
        {
            field: "icon",
            name: "图标",
            type: "string"
        },
        {
            field: "url",
            name: "链接",
            type: "string"
        },
        {
            field: "query",
            name: "查询条件",
            type: "string"
        }
    ],
    rows: [
        {
            title: "地域分析",
            link: "/sys/regionalAnalysis",
            key: "regionalAnalysis",
            icon: "idcard"
        },
        {
            title: "users",
            link: "/sys/users",
            key: "users",
            icon: "user"
        },
        {
            title: "404",
            link: "/404",
            key: "404",
            icon: "frown"
        },
        {
            title: "view",
            link: "/sys/view",
            key: "view",
            icon: "idcard"
        },
        {
            title: "echarts组件",
            link: "/sys/chartView",
            key: "chartView",
            icon: "line-chart"
        },
        {
            title: "用户行为",
            key: "yonghuxingwei",
            icon: "contacts",
            children: [
                {
                    title: "路径分析",
                    link: "/sys/pathAnalysis",
                    key: "pathAnalysis",
                    icon: "link"
                },
                {
                    title: "匹配额度分析",
                    link: "/sys/matchAnalysis",
                    key: "matchAnalysis",
                    icon: "link"
                },
            ]
        },
        {
            title: "iframe",
            key: "iframe",
            icon: "contacts",
            children: [
                {
                    title: "bing",
                    link: "/frame/bing",
                    key: "bing",
                    icon: "shop",
                    url: `https://cn.bing.com/`,
                    query:{
                        h:1200
                    }
                },
                {
                    title: "百度",
                    link: "/frame/baidu",
                    key: "baidu",
                    icon: "shop",
                    url: `https://www.baidu.com/`,
                },]
        },
        {
            title: "请给star",
            url: "https://github.com/mpw0311/antd-umi-sys",
            key: "chartView",
            icon: "star"
        },
    ]
};