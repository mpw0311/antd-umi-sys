export default [
    {
        title: "地域分析",
        link: "/sys/regionalAnalysis",
        key: "regionalAnalysis",
        icon: "idcard"
    },
    {
        title: "用户分析",
        link: "/sys/users",
        key: "users",
        icon: "user"
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
            {
                title: "view1",
                link: "/sys/view/p1",
                key: "p1",
                icon: "line-chart"
            },
            {
                title: "view2",
                link: "/sys/view/p2",
                key: "p2",
                icon: "bar-chart"
            },
        ]
    },
    {
        title: "404",
        link: "/404",
        key: "404",
        icon: "frown"
    },
    {
        title: "echarts组件",
        link: "/sys/chartView",
        key: "chartView",
        icon: "line-chart"
    },
    {
        title: "d3.js组件",
        key: "d3Chart",
        icon: "icon-baobiaofenxi",
        children: [
            {
                title: "树图",
                link: "/sys/treePage",
                key: "treePage",
                icon: "icon-tree"
            },
            {
                title: "桑基图",
                link: "/sys/sankeyPage",
                key: "sankeyPage",
                icon: "icon-mapsankey"
            },
        ]
    },
    {
        title: "iframe",
        key: "iframe",
        icon: "icon-chuangkouwindow30",
        children: [
            {
                title: "bing",
                link: "/frame/bing",
                key: "bing",
                icon: "shop",
                url: `https://cn.bing.com/`,
                query: {
                    h: 1200
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
];