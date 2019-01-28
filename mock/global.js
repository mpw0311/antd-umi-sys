const Mock = require('mockjs');

const { Random } = Mock;
const info = Mock.mock({
    data: {
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
            data: {
                message: "退出登录成功！"
            },
            status: 0
        });
    },
    [`POST /getMessage`](req, res) {
        res.status(200).json({
            data: [
                {
                    title: 'Ant Design Title 1',
                    description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    type: 'read'
                },
                {
                    title: 'Ant Design Title 2',
                    description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    type: 'unread'
                },
                {
                    title: 'Ant Design Title 3',
                    description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    type: 'unread'
                },
                {
                    title: 'Ant Design Title 4',
                    description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    type: 'unread'
                },
            ],
            status: 0
        });
    }
};