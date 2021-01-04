const Mock = require('mockjs');//eslint-disable-line
const { decrypt } = require('./CryptoJS');
console.log(decrypt);
module.exports = {
    [`POST /login`](req, res) {
        const { body } = req;
        const { password, username } = body;
        const pwd = decrypt(password)
        if (pwd === 'admin123' && username === 'admin') {
            res.status(200).json({
                data: {
                    alertDesc: '登录成功！'
                },
                status: 0
            });
        } else {
            res.status(200).json({
                data: {
                    alertDesc: '账号或密码错误！'
                },
                status: -1
            });
        }
    },
};