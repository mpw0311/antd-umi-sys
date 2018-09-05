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
            title: "首页",
            link: "/sys",
            key: "home",
            icon: "home"
        },
        {
            title: "用户",
            link: "/sys/users",
            key: "users",
            icon: "user"
        },
        {
            title: "line-chart",
            link: "/sys/charts",
            key: "charts",
            icon: "line-chart"
        },
        {
            title: "大屏分析",
            key: "dapingfenxi",
            icon: "icon-analysis",
            children: [
                {
                    title: "提现概况分析概览",
                    link: "/frame",
                    key: "analysis2",
                    url: "http://screen.data.p.jianlc.tp/screen/view/analysis2/",
                    icon: "icon-analysis"
                },
                {
                    title: "当前业务状况及趋势",
                    link: "/frame",
                    key: "analysis",
                    url: "http://screen.data.p.jianlc.tp/screen/view/analysis/",
                    icon: "icon-analysis"
                },
            ]
        },
        // ...xlightningMenus
    ]
};