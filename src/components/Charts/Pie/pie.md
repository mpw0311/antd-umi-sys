# 组件名：PieNest
## 数据模型样例
```json
[
    {
        "name": "直接访问",
        "value": 335
    },
    {
        "name": "邮件营销",
        "value": 310
    },
    {
        "name": "联盟广告",
        "value": 234
    },
    {
        "name": "视频广告",
        "value": 135
    },
    {
        "name": "搜索引擎",
        "value": 400
    },
]
```
```json
{
    "columns": [
        {
            "field": "country",
            "name": "country",
            "type": "STRING",
        },
        {
            "field": "count",
            "name": "人数",
            "type": "STRING",
        },
    ],
    "rows":[
        {
            "country": "直接访问",
            "count": "1223",
        },
        {
            "country": "邮件营销",
            "count": "323",
        },
        {
            "country": "联盟广告",
            "count": "1523",
        },
        {
            "country": "视频广告",
            "count": "1523",
        },
    ]
}
 ```