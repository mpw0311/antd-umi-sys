export default [
    {
        title: "gitDataV",
        link: "/sys/githubpro",
        key: "gitDataV",
        icon: "github"
    },
    {
        title: "地域分析",
        link: "/sys/regionalAnalysis",
        key: "regionalAnalysis",
        icon: "idcard"
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
        title: 'Echarts',
        key: 'echarts',
        icon: 'icon-visual',
        children: [
            {
                link: '/sys/echarts/bar',
                key: 'Bar',
                icon: 'bar-chart',
                title: 'Bar'
            },
            {
                link: '/sys/echarts/line',
                key: 'line',
                icon: 'line-chart',
                title: 'Line'
            },
            {
                link: '/sys/echarts/area',
                key: 'area',
                icon: 'area-chart',
                title: 'Area'
            },
            {
                link: '/sys/echarts/yBar',
                key: 'yBar',
                icon: 'icon-yBar',
                title: 'YBar'
            },
            {
                link: '/sys/echarts/funnel',
                key: 'funnel',
                icon: 'icon-funnel',
                title: 'Funnel'
            },
            {
                link: '/sys/echarts/pie',
                icon: 'pie-chart',
                key: "pie",
                title: 'Pie'
            },
            {
                link: '/sys/echarts/pieDoughnut',
                key: 'pieDoughnut',
                icon: 'icon-pieDoughnut',
                title: 'PieDoughnut'
            },
            {
                link: '/sys/echarts/sankey',
                key: 'sankey',
                icon: 'icon-sankey',
                title: 'Sankey'
            },
        ]
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
        title: "用户分析",
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
        title: "watermark",
        url: "https://mpw0311.github.io/watermark",
        key: "watermark",
        icon: "bar-chart"
    },
    {
        title: "图形组件demo",
        url: "https://mpw0311.github.io/react-charts",
        key: "react-charts",
        icon: "bar-chart"
    },
    {
        title: "请给star",
        url: "https://github.com/mpw0311/antd-umi-sys",
        key: "github",
        icon: "star"
    },
];