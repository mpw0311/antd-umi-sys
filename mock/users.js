const Mock = require('mockjs');

const { Random } = Mock;
let db = Mock.mock({
    'data|3-6': [{
        id: '@id',
        email: '@email',
        name: '@name',
        website: Random.cparagraph(1),
        operation: '@operation',
        'age|18-32': 1
    }],
    status: 0
});

module.exports = {
    [`GET /api/users`](req, res) {
        res.status(200).json(db);
        
    },

    [`POST /api/users`](req, res) {
        let user = req.body;
        console.log(req);
        user.id = Mock.mock('@id');
        db.data.push(user);
        res.status(200).json(user);
    }
};