
// ref: https://umijs.org/config/
import { resolve } from "path";
import theme from "./theme.config"


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
    '@utils': resolve(__dirname, "../src/utils"),
    '@context': resolve(__dirname, "../src/layouts/Context"),
    // 组件库
    '@components': resolve(__dirname, "../src/components"),
    // 系统配置
    '@platformConfig': resolve(__dirname, "./platform.config"),
    // 全局services
    '@services': resolve(__dirname, "../src/services"),
    // 全局models
    '@models': resolve(__dirname, "../src/models"),
    //菜单配置项
    "@menuConfig": resolve(__dirname, "./menu.config.js"),
    // 版本日志管理
    "@versionsConfig": resolve(__dirname, './versions.config.json'),
    // request请求
    "@http": resolve(__dirname, '../src/utils/request.js')
  },
  theme,
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },
}
