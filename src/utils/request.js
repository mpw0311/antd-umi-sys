/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  系统通用fetch数据请求
 */
import fetch from 'dva/fetch';
import { message, notification } from 'antd';
import router from 'umi/router';
import { apiPrefix } from '@config';
const logout = () => {
    // @HACK
    /* eslint-disable no-underscore-dangle */
    window.g_app._store.dispatch({
        type: 'global/logout',
    });
};
const checkIsLogin = (url) => {
    const isLogin = sessionStorage.getItem('isLogin');
    const href = window.location.href;
    if (isLogin !== 'true' && url.indexOf('/login') === -1 && href.indexOf('/login') === -1) {
        message.warning('请在登录后操作!');
        router.push('/login');
        return;
    }
};
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
const checkStatus = response => {
    const { status } = response;
    if (status >= 200 && status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: errortext,
    });
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};
export default async (url, options) => {
    checkIsLogin(url);
    const defaultOptions = {
        //发送cookies
        credentials: 'include',
        //cors跨域
        mode: "cors",//no-cors
    };
    const newOptions = { ...defaultOptions, ...options };
    const { method, headers, body } = newOptions;
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        if (!(body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                ...headers,
            };
        }
    }
    const response = await fetch(apiPrefix + url, newOptions)
        .then(checkStatus)
        .then(response => {
            // DELETE and 204 do not return data by default
            // using .json will report an error.
            if (newOptions.method === 'DELETE' || response.status === 204) {
                return response.text();
            }
            return response.json();
        })
        .then(response => {
            if (!(newOptions.method === 'DELETE' || response.status === 204)) {
                const { data: { alertDesc }, status } = response;
                if (status !== 0) {
                    message.error(alertDesc || "无权限！");
                    const { hash } = window.location;
                    if (hash !== '#/login') {
                        setTimeout(() => {
                            logout();
                            // window.location.href= window.location.origin;
                        }, 1500);
                    }
                }
            }
            return response;
        })
        .catch(e => {
            const { name: status } = e;
            if (status === 401) {
                logout();
                return;
            }
            // environment should not be used
            if (status === 403) {
                router.push('/403');
                return;
            }
            if (status <= 504 && status >= 500) {
                router.push('/500');
                return;
            }
            if (status >= 404 && status < 422) {
                router.push('/404');
                return;
            }
            if (status === 'SyntaxError') {
                message.error(`SyntaxError:${e.message}`);
                setTimeout(() => {
                    logout();
                }, 1500);
            }
        });
    return response;
}