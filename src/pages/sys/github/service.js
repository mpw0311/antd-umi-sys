import { message } from 'antd';
import fetch from 'dva/fetch';

export const getAccountInfo = async function ({ account }) {
    return await fetch(`https://api.github.com/users/${account}`)
        .then(response => response.json())
        .catch(err => message.error(err.message));
}
export const getData = async function ({ url }) {
    return await fetch(url)
        .then(response => response.json())
        .catch(err => message.error(err.message));
}