
import { resolve } from "path";
// ref: https://umijs.org/config/
export default {
  history: 'hash',//hash路由
  hash: true,//生成hash文件名
  devtool: 'source-map',//生成map文件
  targets: {//兼容浏览器版本
    ie: 11,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index.js',
      },
      locale: {
        default: 'zh-CN', //默认语言 zh-CN
        baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
        antd: true // 是否启用antd的<LocaleProvider />
      },
      title: 'umi-2.3',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /services\//,
        ],
      },
    }],
  ],
  theme: './theme.config.js',
  alias: {
    "@": resolve(__dirname, "./src"),
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
