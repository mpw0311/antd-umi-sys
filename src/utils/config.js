module.exports = {
    apiPrefix: document.head.dataset.api || '',
    iframePrefix: document.head.dataset.iframe || '',
    loginLogo: 'logo_blue_1024.png',
    sysLogo: 'jianlc.png',
    loginName: '数据平台',
    sysName: 'TEST-Pro',
    copyright: "2019 mpw0311@163.com.",
    menuPermission: true,
    pageSize: 10,
    indexDefultPage: {
        pathname: '/login',
        state: {}
    },
    sysDefultPage: {
        pathname: '/sys/github',
        state: {
            key: 'gitDataV',
            pathtitles: [{ title: 'gitDataV', icon: 'github' }],
        }
    },
    frameDefultPage: {
        pathname: '/frame/baidu',
    },
    iconUrl: '//at.alicdn.com/t/font_1030595_j1ec1up2zyi.js'
};