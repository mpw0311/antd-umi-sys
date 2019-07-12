
// 菜单权限：true(开启) false(关闭)
// let GLOBAL_MENU_PERMISSION;
// if (process && process.env.NODE_ENV === 'development') {
//     GLOBAL_MENU_PERMISSION = false;
// } else {
//     GLOBAL_MENU_PERMISSION = true;
// }

module.exports = {
    apiPrefix: document.head.dataset.api || '',
    iframePrefix: document.head.dataset.iframe || '',
    loginLogo: 'logo_blue_1024.png',
    sysLogo: 'logo.png',
    loginName: '数据平台',
    sysName: 'TEST-Pro',
    copyright: "2019 mpw0311@163.com.",
    menuPermission: true,
    pageSize: 10,
    iconUrl: '//at.alicdn.com/t/font_1030595_depmdbpf3yc.js',
    sysDefultPage: {
        pathname: '/sys/github',
        state: {
            key: 'gitDataV',
            pathtitles: [{ title: 'gitDataV', icon: 'github' }],
        }
    },
};