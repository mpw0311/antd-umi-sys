import { mock } from 'mockjs';
const getdata = () => {
    return mock({
        'time': '220ms',
        'children|4-6': [
            {
                'name': '@name',
                'value|500-1000': 600,
                'time|1-200': 10,
            },
        ],
    });
};

module.exports = {
    [`POST /api/treePage`](req, res) {
        res.status(200).json({
            data: {
                ...getdata()
            },
            status: 0
        });
    }
};