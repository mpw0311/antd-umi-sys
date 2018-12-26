
// ref: https://umijs.org/config/
import { resolve } from "path";

export default {
  history: 'hash',//是否启动hash路由，默认是用的 Browser History
  hash: true,//生成带有hash值文件名，避免本地缓存
  // devtool: 'source-map',//生成map文件
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      // dva: true,
      polyfills: ['ie11'],
      dva: {
        immer: true
      },
      dynamicImport: true,//true：按需加载
      title: 'antd-umi-sys',
      dll: false,
      pwa: false,//Progressive Web App，即渐进式WEB应用。
      hardSource: false,
      locale: 'zh-CN',// i18n
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /chart\/Container\.js$/,
          /chart\/ECharts\/.+Component\.js$/,
          /chart\/ECharts\/.+ComPonent\.js$/,
          /chart\/ECharts\/theme\/.+\.js$/,
          /chart\/highCharts\/.+Component\.js$/,
          /chart\/highCharts\/mapdata\/.+\.js$/,
          /chart\/Recharts\/.+Component\.js$/,
          /chart\/Recharts\/Container\.js$/,
        ],
      },
    }],
  ],
  theme: './theme.config.js',
  alias: {
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname, "./src/components"),
    utils: resolve(__dirname, "./src/utils"),
    config: resolve(__dirname, "./src/utils/config"),
    services: resolve(__dirname, "./src/services"),
    models: resolve(__dirname, "./src/models"),
  },
  "proxy": {
    // "/api": {
    //   "target": "",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  },
}
