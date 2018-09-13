import { message } from "antd";
// 后台API URI前端
const apiPrefix = document.head.dataset.api || '';

export default function (api, options = {}) {
    if (!api) return;
    const url = apiPrefix + api;
    const { method = "GET", body = {}, async = true, setting = {} } = options;// eslint-disable-line
    const data = body;
    const { STATUS } = setting;
    const paramdata = data;
    const promise = new Promise((resolve, reject) => {// eslint-disable-line
        if (method.toLowerCase() === "get") {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                // readyState == 4说明请求已完成
                if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
                    // 从服务器获得数据
                    // fn.call(this, xhr.responseText);
                    const result = JSON.parse(xhr.responseText);
                    const { data, status } = result;
                    if (STATUS === 0) {
                        resolve(result);
                    } else if (status === 0) {
                        resolve({ data });
                    } else {
                        message.error("网络请求无权限！");
                        setTimeout(() => {
                            const { origin } = window.location;
                            window.location.href = origin;
                        }, 1000);
                    }
                }
            };
            xhr.send();
        } else if (method.toLowerCase() === "post") {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            // 添加http头，发送信息至服务器时内容编码类型
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
                    const result = JSON.parse(xhr.responseText);
                    const { data, status } = result;
                    if (STATUS === 0) {
                        resolve(result);
                    } else if (status === 0) {
                        resolve({ data });
                    } else {
                        message.error("网络请求无权限！");
                        setTimeout(() => {
                            const { origin } = window.location;
                            window.location.href = origin;
                        }, 1000);
                    }
                }
            };
            xhr.send(paramdata);
        } else if (method.toLowerCase() === "jsonp") {
            const params = typeof (paramdata) === "string" ? JSON.parse(paramdata) : paramdata;
            // 封装一个jsonp函数
            const { timeout = 15000, cbName = 'jsoncallback' } = options;
            //  封装一个json转字符串函数
            const json2url = (json) => {
                // 创建一个空数组
                const arr = [];
                if (typeof json === "object") {
                    // 遍历json的每个键值对
                    for (const key in json) {
                        // 把每个键值对转换成=的形式依次放入数组
                        arr.push(`${key}=${json[key]}`);
                    }
                }
                // 用&进行字符串拼接，并返回结果
                return arr.join('&');
            };
            // 设置jsonp的回调函数名并同时设置刷新缓存（利用时间戳）
            params[cbName] = `show${new Date().getTime()}`;
            // 把随机数里生成的.替换为空（函数命名不要有点）
            params[cbName] = params[cbName].replace('.', '');
            // 获取头部元素
            const oHead = document.getElementsByTagName('head')[0];
            // 创新script（此处用到jsonp的核心机制，利用script的跨域异步请求，调用回调函数）
            const oS = document.createElement('script');
            // 给script的src的地址赋值为交互地址
            oS.src = `${url}?${json2url(params)}`;
            // 把创建的script放入head中
            oHead.appendChild(oS);
            // 设置一个定时器
            const timer = setTimeout(() => {
                // 当响应时间超时后，使后续的函数不执行
                window[paramdata[cbName]] = null;
                // 并提示网络信息
                // json.error && json.error('亲，网络不给力！');
                reject('亲，网络不给力！');
            }, timeout);
            // 当数据正常响应时，执行以下操作
            window[params[cbName]] = (res) => {
                // 关闭定时器
                clearTimeout(timer);
                // 清除之前插入的script（因为script只加载一次，并且此时已收到数据）
                oHead.removeChild(oS);
                // 执行成功时设置的函数
                const { data, status } = res;
                if (status === 0) {
                    resolve(data);
                }
                // json.success && json.success(res);
            };
        }
    });
    return promise;
}