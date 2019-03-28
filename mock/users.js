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
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(db);

    },

    [`POST /api/users`](req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let user = req.body;
        if (typeof user === 'string') {
            user = JSON.parse(user)
        }
        user.id = Mock.mock('@id');
        db.data.push(user);
        res.status(200).json(db);
    },

    [`PATCH /api/users/:id`](req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { params: { id }, query, body } = req;
        console.log(id, query);
        // db.data = db.data.map(item => item.id === id ? user : item);
        res.status(200).json(db);
    },

    [`DELETE /api/users/:id`](req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { params: { id } } = req;
        db.data = db.data.filter(item => item.id !== id);
        res.status(200).json(db);
    }
};