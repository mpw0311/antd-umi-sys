import fetch from 'dva/fetch';
import { message } from 'antd';
import router from 'umi/router';
import { apiPrefix } from 'config';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const { setting = {}, ...rest } = options;
  const { STATUS } = setting;
  const response = await fetch(apiPrefix + url, {
    headers: {
      // 'Access-Control-Allow-Origin':"*",
      // 'Content-Type': 'application/x-www-form-urlencoded',    
      // 'Content-Type': 'application/json',
    },
    ...rest,
    credentials: 'include', // 允许跨域发送cookies：
    mode: "cors"//no-cors
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({ data: {}, status: -1, });
      }
    })
    .catch(error => {
      return {
        data: {
          alertDesc: error.message
        },
        status: -1,
      };
    });
  const { data = {}, status } = response;
  if (STATUS === 0) {
    return response;
  }
  if (status !== 0) {
    const { alertDesc } = data;
    message.error(alertDesc || "无权限！");
    const { hash } = window.location;
    if (hash !== '#/login') {
      setTimeout(() => {
        router.push('/login');
        // window.location.href= window.location.origin;
      }, 1500);
    }
  }
  return response;
};
