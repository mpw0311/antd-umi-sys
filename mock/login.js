const Mock = require('mockjs');//eslint-disable-line

module.exports = {
    [`POST /login`](req, res) {
        console.log(req);
        res.status(200).json({
            data: {
                result: 0
            },
            status: 0
        });
    },
};