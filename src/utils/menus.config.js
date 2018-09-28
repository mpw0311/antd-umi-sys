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
            title: "users",
            link: "/sys/users",
            key: "users",
            icon: "user"
        },
        {
            title: "view",
            link: "/sys/view",
            key: "view",
            icon: "user"
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
                    link: "/sys/frame",
                    key: "bing",
                    icon: "shop",
                    url: `https://cn.bing.com/`,
                },
                {
                    title: "百度",
                    link: "/sys/frame",
                    key: "baidu",
                    icon: "shop",
                    url: `https://www.baidu.com/`,
                },]
        },
    ]
};