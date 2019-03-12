const Mock = require('mockjs');
const menuData = [
    {
        title: "地域分析",
        key: "regionalAnalysis",
    },
    {
        title: "users",
        key: "users",
    },
    {
        title: "404",
        key: "404",
    },
    {
        title: "用户行为",
        key: "yonghuxingwei",
        children: [
            {
                title: "路径分析",
                key: "pathAnalysis",
            },
            {
                title: "view1",
                key: "p1",
            },
            {
                title: "view2",
                key: "p2",
            },
        ]
    },
    {
        title: "echarts组件",
        key: "echarts",
    },
    {
        title: "d3.js组件",
        key: "d3Chart",
        children: [
            {
                title: "树图",
                key: "treePage",
            },
        ]
    },
    {
        title: "iframe",
        key: "iframe",
        children: [
            {
                title: "bing",
                key: "bing",
            }
        ]
    },
    {
        title: "请给star",
        key: "github",
    },
];
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};