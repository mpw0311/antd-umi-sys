
export default {
    namespace: 'chartView',
    state: {
        lineData: {
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
        },
        barData: {
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
        },
        barWaterfallData: [
            {
                name: "1千至3千",
                type: "number",
                value: 89
            },
            {
                name: "3千至1万",
                type: "number",
                value: 400
            },
            {
                name: "1万至3万",
                type: "number",
                value: 260
            },
            {
                name: "3万至5万",
                type: "number",
                value: 100
            },
            {
                name: "5万至10万",
                type: "number",
                value: 223
            },
        ],
        scatterAqiColorData: [
            {
                name: "1千至3千",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '118',
                            money_match_rate: '83',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '50',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '86',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
            },
            {
                name: "3千至5千",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '24',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '393',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '44',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '59',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
            },
            {
                name: "5千至1万",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '78',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '90',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '66',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
            },
        ],
        pieData: [
            {
                name: "直接访问",
                value: 335
            },
            {
                name: "邮件营销",
                value: 310
            },
            {
                name: "联盟广告",
                value: 234
            },
            {
                name: "视频广告",
                value: 135
            },
            {
                name: "搜索引擎",
                value: 400
            },
        ],
        nestData: [
            {
                name: '直达',
                children: [
                    { value: 335, name: '直达' },
                ]
            },
            {
                name: '营销广告',
                children: [
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                ]
            },
            {
                name: '搜索引擎',
                children: [
                    { value: 1048, name: '百度' },
                    { value: 251, name: '谷歌' },
                    { value: 147, name: '必应' },
                    { value: 102, name: '其他' }
                ]
            },

        ],
        sankeyData: {
            nodes: [
                {
                    name: "Total",
                    value: "123123213"
                },
                {
                    name: "Environment",
                    value: "123123213"
                },
                {
                    name: "Land use",
                    value: "123123"
                },
                {
                    name: "Cocoa butter (Organic)",
                    value: "9999888"
                },
                {
                    name: "Cocoa mass (Organic)",
                    value: "1231239900"
                },
                {
                    name: "Hazelnuts (Organic)",
                    value: "12qwewqe"
                },
                {
                    name: "Cane sugar (Organic)",
                    value: "opopopo"
                },
                {
                    name: "Vegetables (Organic)",
                    value: "poipoijio"
                },
                {
                    name: "Climate change",
                    value: "pppplllll"
                },
                {
                    name: "Harmful substances",
                    value: "1231239900"
                },
                {
                    name: "Water use",
                    value: "1231239900"
                },
                {
                    name: "Resource depletion",
                    value: "1231239900"
                },
                {
                    name: "Refrigeration",
                    value: "1231239900"
                },
                {
                    name: "Packaging",
                    value: "1231239900"
                },
                {
                    name: "Human rights",
                    value: "1231239900"
                },
                {
                    name: "Child labour",
                    value: "1231239900"
                },
                {
                    name: "Coconut oil (Organic)",
                    value: "1231239900"
                },
                {
                    name: "Forced labour",
                    value: "1231239900"
                },
                {
                    name: "Health safety",
                    value: "1231239900"
                },
                {
                    name: "Access to water",
                    value: "1231239900"
                },
                {
                    name: "Freedom of association",
                    value: "1231239900"
                },
                {
                    name: "Access to land",
                    value: "1231239900"
                },
                {
                    name: "Sufficient wage",
                    value: "1231239900"
                },
                {
                    name: "Equal rights migrants",
                    value: "1231239900"
                },
                {
                    name: "Discrimination",
                    value: "1231239900"
                },
                {
                    name: "Working hours",
                    value: "1231239900"
                }
            ],
            links: [
                {
                    source: "Total",
                    target: "Environment",
                    value: 0.342284047256003
                },
                {
                    source: "Environment",
                    target: "Land use",
                    value: 0.32322870366987
                },
                {
                    source: "Land use",
                    target: "Cocoa butter (Organic)",
                    value: 0.177682517071359
                },
                {
                    source: "Land use",
                    target: "Cocoa mass (Organic)",
                    value: 0.137241325342711
                },
                {
                    source: "Land use",
                    target: "Hazelnuts (Organic)",
                    value: 0.00433076373512774
                },
                {
                    source: "Land use",
                    target: "Cane sugar (Organic)",
                    value: 0.00296956039863467
                },
                {
                    source: "Land use",
                    target: "Vegetables (Organic)",
                    value: 0.00100453712203756
                },
                {
                    source: "Environment",
                    target: "Climate change",
                    value: 0.0112886157414413
                },
                {
                    source: "Climate change",
                    target: "Cocoa butter (Organic)",
                    value: 0.00676852971933996
                },
                {
                    source: "Climate change",
                    target: "Cocoa mass (Organic)",
                    value: 0.00394686874786743
                },
                {
                    source: "Climate change",
                    target: "Cane sugar (Organic)",
                    value: 0.000315972058711838
                },
                {
                    source: "Climate change",
                    target: "Hazelnuts (Organic)",
                    value: 0.000218969462265292
                },
                {
                    source: "Climate change",
                    target: "Vegetables (Organic)",
                    value: 0.0000382757532567656
                },
                {
                    source: "Environment",
                    target: "Harmful substances",
                    value: 0.00604275542495656
                },
                {
                    source: "Harmful substances",
                    target: "Cocoa mass (Organic)",
                    value: 0.0055125989240741
                },
                {
                    source: "Harmful substances",
                    target: "Cocoa butter (Organic)",
                    value: 0.000330017607892127
                },
                {
                    source: "Harmful substances",
                    target: "Cane sugar (Organic)",
                    value: 0.000200138892990337
                },
                {
                    source: "Harmful substances",
                    target: "Hazelnuts (Organic)",
                    value: 0
                },
                {
                    source: "Harmful substances",
                    target: "Vegetables (Organic)",
                    value: 0
                },
                {
                    source: "Environment",
                    target: "Water use",
                    value: 0.00148345269044703
                },
                {
                    source: "Water use",
                    target: "Cocoa butter (Organic)",
                    value: 0.00135309891304186
                },
                {
                    source: "Water use",
                    target: "Cocoa mass (Organic)",
                    value: 0.000105714137908639
                },
                {
                    source: "Water use",
                    target: "Hazelnuts (Organic)",
                    value: 0.0000133452642581887
                },
                {
                    source: "Water use",
                    target: "Cane sugar (Organic)",
                    value: 0.00000878074837009238
                },
                {
                    source: "Water use",
                    target: "Vegetables (Organic)",
                    value: 0.0000025136268682477
                },
                {
                    source: "Environment",
                    target: "Resource depletion",
                    value: 0.000240519729288764
                },
                {
                    source: "Resource depletion",
                    target: "Cane sugar (Organic)",
                    value: 0.000226237279345084
                },
                {
                    source: "Resource depletion",
                    target: "Vegetables (Organic)",
                    value: 0.0000142824499436793
                },
                {
                    source: "Resource depletion",
                    target: "Hazelnuts (Organic)",
                    value: 0
                },
                {
                    source: "Resource depletion",
                    target: "Cocoa mass (Organic)",
                    value: 0
                },
                {
                    source: "Resource depletion",
                    target: "Cocoa butter (Organic)",
                    value: 0
                },
                {
                    source: "Environment",
                    target: "Refrigeration",
                    value: 0
                },
                {
                    source: "Environment",
                    target: "Packaging",
                    value: 0
                },
                {
                    source: "Total",
                    target: "Human rights",
                    value: 0.307574096993239
                },
                {
                    source: "Human rights",
                    target: "Child labour",
                    value: 0.0410641202645833
                },
                {
                    source: "Child labour",
                    target: "Hazelnuts (Organic)",
                    value: 0.0105339381639722
                },
                {
                    source: "Child labour",
                    target: "Cocoa mass (Organic)",
                    value: 0.0105
                },
                {
                    source: "Child labour",
                    target: "Cocoa butter (Organic)",
                    value: 0.0087294420777
                },
                {
                    source: "Child labour",
                    target: "Coconut oil (Organic)",
                    value: 0.00474399974233333
                },
                {
                    source: "Child labour",
                    target: "Cane sugar (Organic)",
                    value: 0.00388226450884445
                },
                {
                    source: "Child labour",
                    target: "Vegetables (Organic)",
                    value: 0.00267447577173333
                },
                {
                    source: "Human rights",
                    target: "Forced labour",
                    value: 0.0365458590642445
                },
                {
                    source: "Forced labour",
                    target: "Hazelnuts (Organic)",
                    value: 0.0114913076376389
                },
                {
                    source: "Forced labour",
                    target: "Cocoa butter (Organic)",
                    value: 0.0081134807347
                },
                {
                    source: "Forced labour",
                    target: "Cocoa mass (Organic)",
                    value: 0.00765230236575
                },
                {
                    source: "Forced labour",
                    target: "Cane sugar (Organic)",
                    value: 0.004
                },
                {
                    source: "Forced labour",
                    target: "Vegetables (Organic)",
                    value: 0.00296668823626667
                },
                {
                    source: "Forced labour",
                    target: "Coconut oil (Organic)",
                    value: 0.00232208008988889
                },
                {
                    source: "Human rights",
                    target: "Health safety",
                    value: 0.0345435327843611
                },
                {
                    source: "Health safety",
                    target: "Hazelnuts (Organic)",
                    value: 0.0121419536385
                },
                {
                    source: "Health safety",
                    target: "Cocoa mass (Organic)",
                    value: 0.00766772850678333
                },
                {
                    source: "Health safety",
                    target: "Cocoa butter (Organic)",
                    value: 0.0056245892061
                },
                {
                    source: "Health safety",
                    target: "Coconut oil (Organic)",
                    value: 0.00361616847688889
                },
                {
                    source: "Health safety",
                    target: "Cane sugar (Organic)",
                    value: 0.00277374682533333
                },
                {
                    source: "Health safety",
                    target: "Vegetables (Organic)",
                    value: 0.00271934613075556
                },
                {
                    source: "Human rights",
                    target: "Access to water",
                    value: 0.0340206659360667
                },
                {
                    source: "Access to water",
                    target: "Cocoa mass (Organic)",
                    value: 0.0105
                },
                {
                    source: "Access to water",
                    target: "Cocoa butter (Organic)",
                    value: 0.0089274160792
                },
                {
                    source: "Access to water",
                    target: "Hazelnuts (Organic)",
                    value: 0.0054148022845
                },
                {
                    source: "Access to water",
                    target: "Cane sugar (Organic)",
                    value: 0.00333938149786667
                },
                {
                    source: "Access to water",
                    target: "Vegetables (Organic)",
                    value: 0.00314663377488889
                },
                {
                    source: "Access to water",
                    target: "Coconut oil (Organic)",
                    value: 0.00269243229961111
                },
                {
                    source: "Human rights",
                    target: "Freedom of association",
                    value: 0.0320571523941667
                },
                {
                    source: "Freedom of association",
                    target: "Hazelnuts (Organic)",
                    value: 0.0132312483463611
                },
                {
                    source: "Freedom of association",
                    target: "Cocoa butter (Organic)",
                    value: 0.0077695200707
                },
                {
                    source: "Freedom of association",
                    target: "Cocoa mass (Organic)",
                    value: 0.00510606573995
                },
                {
                    source: "Freedom of association",
                    target: "Vegetables (Organic)",
                    value: 0.00354321156324444
                },
                {
                    source: "Freedom of association",
                    target: "Cane sugar (Organic)",
                    value: 0.00240710667391111
                },
                {
                    source: "Freedom of association",
                    target: "Coconut oil (Organic)",
                    value: 0
                },
                {
                    source: "Human rights",
                    target: "Access to land",
                    value: 0.0315022209894056
                },
                {
                    source: "Access to land",
                    target: "Hazelnuts (Organic)",
                    value: 0.00964970063322223
                },
                {
                    source: "Access to land",
                    target: "Cocoa mass (Organic)",
                    value: 0.00938530207965
                },
                {
                    source: "Access to land",
                    target: "Cocoa butter (Organic)",
                    value: 0.0060110791848
                },
                {
                    source: "Access to land",
                    target: "Cane sugar (Organic)",
                    value: 0.00380818314608889
                },
                {
                    source: "Access to land",
                    target: "Vegetables (Organic)",
                    value: 0.00264795594564445
                },
                {
                    source: "Access to land",
                    target: "Coconut oil (Organic)",
                    value: 0
                },
                {
                    source: "Human rights",
                    target: "Sufficient wage",
                    value: 0.0287776757227333
                },
                {
                    source: "Sufficient wage",
                    target: "Cocoa mass (Organic)",
                    value: 0.00883512456493333
                },
                {
                    source: "Sufficient wage",
                    target: "Cocoa butter (Organic)",
                    value: 0.0078343367268
                },
                {
                    source: "Sufficient wage",
                    target: "Coconut oil (Organic)",
                    value: 0.00347879026511111
                },
                {
                    source: "Sufficient wage",
                    target: "Hazelnuts (Organic)",
                    value: 0.00316254211388889
                },
                {
                    source: "Sufficient wage",
                    target: "Vegetables (Organic)",
                    value: 0.00281013722808889
                },
                {
                    source: "Sufficient wage",
                    target: "Cane sugar (Organic)",
                    value: 0.00265674482391111
                },
                {
                    source: "Human rights",
                    target: "Equal rights migrants",
                    value: 0.0271146645119444
                },
                {
                    source: "Equal rights migrants",
                    target: "Cocoa butter (Organic)",
                    value: 0.0071042315061
                },
                {
                    source: "Equal rights migrants",
                    target: "Cocoa mass (Organic)",
                    value: 0.00636673210005
                },
                {
                    source: "Equal rights migrants",
                    target: "Hazelnuts (Organic)",
                    value: 0.00601459775836111
                },
                {
                    source: "Equal rights migrants",
                    target: "Coconut oil (Organic)",
                    value: 0.00429185583138889
                },
                {
                    source: "Equal rights migrants",
                    target: "Cane sugar (Organic)",
                    value: 0.00182647471915556
                },
                {
                    source: "Equal rights migrants",
                    target: "Vegetables (Organic)",
                    value: 0.00151077259688889
                },
                {
                    source: "Human rights",
                    target: "Discrimination",
                    value: 0.0211217763359833
                },
                {
                    source: "Discrimination",
                    target: "Cocoa mass (Organic)",
                    value: 0.00609671700306667
                },
                {
                    source: "Discrimination",
                    target: "Cocoa butter (Organic)",
                    value: 0.0047738806325
                },
                {
                    source: "Discrimination",
                    target: "Coconut oil (Organic)",
                    value: 0.00368119084494444
                },
                {
                    source: "Discrimination",
                    target: "Vegetables (Organic)",
                    value: 0.00286009813604444
                },
                {
                    source: "Discrimination",
                    target: "Cane sugar (Organic)",
                    value: 0.00283706180951111
                },
                {
                    source: "Discrimination",
                    target: "Hazelnuts (Organic)",
                    value: 0.000872827909916666
                },
                {
                    source: "Human rights",
                    target: "Working hours",
                    value: 0.02082642898975
                },
                {
                    source: "Working hours",
                    target: "Hazelnuts (Organic)",
                    value: 0.0107216773848333
                },
                {
                    source: "Working hours",
                    target: "Coconut oil (Organic)",
                    value: 0.00359009052944444
                },
                {
                    source: "Working hours",
                    target: "Vegetables (Organic)",
                    value: 0.00212300379075556
                },
                {
                    source: "Working hours",
                    target: "Cocoa butter (Organic)",
                    value: 0.0018518584356
                },
                {
                    source: "Working hours",
                    target: "Cocoa mass (Organic)",
                    value: 0.00158227069058333
                },
                {
                    source: "Working hours",
                    target: "Cane sugar (Organic)",
                    value: 0.000957528158533333
                }
            ]
        },

    },
    subscriptions: {
        setup({ dispatch, history }) {//eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {//eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
