module.exports = {
    apiPrefix: document.head.dataset.api || '',
    iframePrefix: document.head.dataset.iframe || '',
    loginLogo: 'logo_blue_1024.png',
    sysLogo: 'jianlc.png',
    loginName: '数据平台',
    sysName: 'TEST-Pro',
    copyright: "V1.0.3 2018 © by mpw0311@163.com.",
    menuPermission: false,
    pageSize: 10,
    indexDefultPage: {
        pathname: '/login',
        state: {}
    },
    sysDefultPage: {
        pathname: '/sys/regionalAnalysis',
        state: {
            key: 'regionalAnalysis',
            pathtitles: ['地域分析'],
        }
    },
    frameDefultPage: {
        pathname: '/frame/baidu',
    },
};