
import { resolve } from "path";
// ref: https://umijs.org/config/


export default {
  base: '/',
  treeShaking: true,//用于描述移除 JavaScript 上下文中的未引用代码
  history: 'hash',//hash路由
  hash: true,//生成hash文件名
  //   disableRedirectHoist: true,//禁用 redirect 上提。
  // devtool: 'source-map',//生成map文件
  targets: {//兼容浏览器版本
    // ie: 11,
  },
  // 配置模块不打入代码
  externals: {
    // echarts: 'window.echarts',
    d3: 'window.d3',
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index.js'
      },
      title: 'antd-umi-2.6',
      dll: true,
      locale: {
        enable: true,
        default: 'zh-CN',//'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      // cdn
      scripts: [
        // { src: 'https://cdn.bootcss.com/echarts/4.2.1/echarts.min.js' },
        
        { src: 'https://cdn.bootcss.com/d3/5.9.2/d3.min.js' },
      ],
    }],
  ],
  alias: {
    "@": resolve(__dirname, "../src"),
    '@components': resolve(__dirname, "../src/components"),
    '@utils': resolve(__dirname, "../src/utils"),
    '@config': resolve(__dirname, "./platform.config"),
    '@context': resolve(__dirname, "../src/layouts/Context"),
    '@services': resolve(__dirname, "../src/services"),
    '@models': resolve(__dirname, "../src/models"),
  },
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
}
