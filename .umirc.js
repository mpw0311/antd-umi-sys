import { resolve } from "path";
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash',//hash路由
  hash: true,//生成hash文件名
  // devtool: 'source-map',//生成map文件
  targets: {//兼容浏览器版本
    // ie: 11,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'antd-umi-2.4',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    "@": resolve(__dirname, "./src"),
    // '@themes': resolve(__dirname, './src/themes'),
    '@components': resolve(__dirname, "./src/components"),
    '@utils': resolve(__dirname, "./src/utils"),
    '@config': resolve(__dirname, "./src/utils/config"),
    '@context':resolve(__dirname, "./src/layouts/Context"),
    '@services': resolve(__dirname, "./src/services"),
    '@models': resolve(__dirname, "./src/models"),
  },
  "proxy": {
    // "/api": {
    //   "target": "",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  },
}
