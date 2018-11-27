module.exports = {
    logoPath: '/',
    loginName: '数据平台',
    sysName: 'TEST',
    copyright: "V1.0.0 2018 © by mpw.",
    apiPrefix: document.head.dataset.api || '',
    iframePrefix: document.head.dataset.iframe || '',
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