import ReactEcharts from 'echarts-for-react';
export default (props) => {
    const {
        loading = false,
        nodata = false,
        title,
        style,
        ...rest
    } = props;
    if (loading) {
        return (
            <ReactEcharts
                option={{}}
                style={style}
                showLoading={loading}
            />
        );
    } else if (nodata) {
        const option = {
            title: {
                text: title,
                left: 'center',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            graphic: [
                {
                    type: 'group',
                    left: 'center',
                    top: 'center',
                    children: [
                        {
                            type: 'text',
                            z: 100,
                            left: 'center',
                            top: 'middle',
                            style: {
                                // fill: '#000',
                                // stroke: '#555',
                                opacity: 1,
                                lineWidth: 2,
                                text: [
                                    '无数据'
                                ].join('\n'),
                                fontSize: '18',
                                fontFamily: 'Microsoft YaHei',
                                fontWeight: 'normal',
                                textFill: '#555'
                            }
                        }
                    ]
                }
            ]
        };
        return (
            <ReactEcharts
                option={option}
                style={style}
            />
        );
    } else {
        return (<ReactEcharts style={style}  {...rest} />);
    }
};
