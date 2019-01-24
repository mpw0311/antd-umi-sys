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
            key: "view",
            icon: "idcard",
            children: [
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
    ]
};