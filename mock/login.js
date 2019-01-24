const Mock = require('mockjs');//eslint-disable-line

module.exports = {
    [`POST /login`](req, res) {
        res.status(200).json({
            data: {
                result: 0
            },
            status: 0
        });
    },
};