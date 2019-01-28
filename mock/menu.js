const Mock = require('mockjs');
const menuData = {
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
            key: "regionalAnalysis",
        },
        {
            title: "用户",
            key: "users",
        },
        {
            title: "路径分析",
            key: "pathAnalysis",
        },
    ]
};
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};