# antd-umi-sys
## 简介
    企业管理平台，主要技术：react、antd、umi、dva、es6、less、webpack等。
    推荐浏览器：Google Chrome
![antd-umi-sys](src/assets/demo_login.png)
![antd-umi-sys](src/assets/demo.png)
## 特性
+ 单页面应用；
+ 组件化开发；
+ 丰富的Echarts图形组件；
+ 按需加载；
+ mock模拟数据请求
---
## 目录结构

```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```
---
## 数据模型
### 数据结构
```json
    {
    "columns": [
        {
            "field": "xAxis",
            "name": "时间",
            "type": "string"
        },
        {
            "field": "email",
            "name": "邮件营销",
            "type": "string"
        },
        {
            "field": "union",
            "name": "联盟广告",
            "type": "string"
        },
        {
            "field": "video",
            "name": "视频广告",
            "type": "string"
        },
        {
            "field": "visit",
            "name": "直接访问",
            "type": "string"
        },
        {
            "field": "search",
            "name": "搜索引擎",
            "type": "string"
        }
    ],
    "rows": [
        {
            "xAxis": "周一",
            "email": 120,
            "union": 220,
            "video": 150,
            "visit": 30,
            "search": 820
        },
        {
            "xAxis": "周二",
            "email": 132,
            "union": 182,
            "video": 232,
            "visit": 332,
            "search": 932
        },
        {
            "xAxis": "周三",
            "email": 101,
            "union": 192,
            "video": 202,
            "visit": 302,
            "search": 902
        },
        {
            "xAxis": "周四",
            "email": 134,
            "union": 234,
            "video": 154,
            "visit": 334,
            "search": 934
        },
        {
            "xAxis": "周五",
            "email": 90,
            "union": 290,
            "video": 190,
            "visit": 390,
            "search": 1290
        },
        {
            "xAxis": "周六",
            "email": 230,
            "union": 330,
            "video": 330,
            "visit": 330,
            "search": 1230
        },
        {
            "xAxis": "周日",
            "email": 210,
            "union": 310,
            "video": 420,
            "visit": 320,
            "search": 1320
        }
    ]
}
```
### 树形结构
```json
    {
        "data":{
            "columns": [
                {
                    "field": "title",
                    "name": "标题名",
                    "type": "string"
                },{
                    "field": "key",
                    "name": "key",
                    "type": "string"
                }
            ],
            "rows": [
                {
                    "title": "首页",
                    "key": "home"
                },{
                    "title": "汇总数据",
                    "key": "huizongshuju",
                    "children": [
                        {
                            "title": "交易",
                            "key": "jiaoyi"
                        },{
                            "title": "用户",
                            "key": "yonghu"
                        },{
                            "title": "存量",
                            "key": "cunliang"
                        }
                    ]
                },
                {
                    "title": "实时分析",
                    "key": "shishifenxi",
                    "children": [
                        {
                            "title": "实时概况",
                            "key": "shsihigaikuang"
                        }
                    ]
                },{
                    "title": "定期数据",
                    "key": "dingqishuju"
                }
            ]
        },
        "status":0
    }
```
  ## 菜单config
  ```js
  {
    columns: [
        {
            field: "title",
            name: "标题名",
            type: "string"
        },
        {
            field: "key",
            name: "菜单id",
            type: "string"
        },
    ],
    rows: [
        {
            title: "首页",
            key: "sys",
        },
        {
            title: "汇总数据",
            key:"huizongshuju",
            children: [
                {
                    title: "交易",
                    key: "summryData_transaction",
                }, {
                    title: "用户",
                    key: "summryData_user",
                }, {
                    title: "存量",
                    key: "summryData_stock",
                }
            ]
        },
    ]
}
```

## 响应式栅格
```
xs	<576px 响应式栅格，可为栅格数或一个包含其他属性的对象
sm	≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象
md	≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
lg	≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
xl	≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
xxl	≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
```
## eslintc
{
  "extends": "eslint-config-umi"
}
