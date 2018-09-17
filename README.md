# antd-umi-sys

## 特性
+ react+radux+dva+antd+es6 
+ Echarts图形组件；
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
### 二维表结构
```js
    {
        "data": {
            "columns": [
                {
                    "field": "date",
                    "name": "时间",
                    "type": "string"
                },
                {
                    "field": "T0",
                    "name": "T0",
                    "type": "number"
                },
                {
                    "field": "T1",
                    "name": "T1",
                    "type": "number"
                },
                {
                    "field": "T2",
                    "name": "T2",
                    "type": "number"
                }
            ],
            "rows": [
                {
                    "date": "06-01",
                    "T0": 123,
                    "T1": 123,
                    "T2": 123
                },
                {
                    "date": "06-02",
                    "T0": 123,
                    "T1": 123,
                    "T2": 123
                }
            ],
            "total":2,
            "current": 1,
            "pageSize": 5

        },
        "status": 0
    }
```
### 树形结构
```js
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
                },{
                    "title": "天天房东",
                    "key": "tiantianfangdong"
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

xs	<576px 响应式栅格，可为栅格数或一个包含其他属性的对象
sm	≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象
md	≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象
lg	≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象
xl	≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
xxl	≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象

## eslintc
{
  "extends": "eslint-config-umi"
}
