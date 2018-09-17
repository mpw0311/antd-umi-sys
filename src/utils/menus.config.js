import xlightning from './xlightning.config';
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
            title: "view",
            link: "/sys/view",
            key: "view",
            icon: "user"
        },
        {
            title: "line-chart",
            link: "/sys/charts",
            key: "charts",
            icon: "line-chart"
        },
        ...xlightning
    ]
};