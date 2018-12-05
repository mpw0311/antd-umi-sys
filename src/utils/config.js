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
    indexPage: {
        pathname: '/login',
        state: {}
    },
    indexSys: {
        pathname: '/sys/regionalAnalysis',
        state: {
            key: 'regionalAnalysis',
            pathtitles: ['地域分析'],
        }
    },
    indexIframe: {
        title: '交易',
        pathtitles: ['汇总数据', '交易'],
        key: 'summryData_transaction',
        url: `http://www.baidu.com`
    }
};