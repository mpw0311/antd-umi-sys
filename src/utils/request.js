import fetch from 'dva/fetch';
import { message } from 'antd';
import { apiPrefix } from 'config';


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

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
      // 'Content-Type': 'application/json',
    },
    ...rest,
    withCredentials: true,
    credentials: 'include', // 允许跨域
    mode: "cors"
  });

  checkStatus(response);

  const result = await response.json();
  const { data = {}, status } = result;
  if (STATUS === 0) {
    return result;
  }
  const ret = {
    data,
    headers: {},
  };
  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }
  if (status !== 0) {
    const { alertDesc } = data;
    message.error(alertDesc || '无权限!');
    setTimeout(() => {
      const url = window.location.origin;
      window.location.href = url + "/login";
    }, 1000);
  } else {
    return ret;
  }
}
