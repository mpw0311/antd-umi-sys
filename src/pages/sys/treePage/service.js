import { request } from '@utils';
// import { mock } from 'mockjs';
// const getdata = () => {
//     return mock({
//         'time': '220ms',
//         'children|4-6': [
//             {
//                 'name': '@name',
//                 'value|500-1000': 600,
//                 'time|1-200': 10,
//             },
//         ],
//     });
// };
export function fetch(payload) {
    // const { name } = payload;
    return request(`/api/treePage`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
    // return {
    //     data: {
    //         name,
    //         ...getdata()
    //     }
    // };
};