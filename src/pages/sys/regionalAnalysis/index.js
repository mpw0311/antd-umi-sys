import { connect } from 'dva';
import { List, Checkbox, Select } from 'antd';
import { Page } from '@components';
import { ChinaMap } from '@components/Echarts';
import { methods } from '@utils';
import styles from './index.less';

const { formatNumer } = methods;
const Option = Select.Option;
function Index(props) {
    const { loading, mapdata, checkes, dispatch, defaultKey } = props;
    const formatter = (params) => {
        const { name, data = {}, marker } = params;
        const { email, union, video, visit, search, rank } = data;
        return `<div style='color:#666;'>
            ${marker}${name}排名：<span style='color:#E21918;font-size:16px;'>${rank}</span> <br/>
        ${email ? `邮件营销：<span style='color:#E21918;font-size:16px;'>${formatNumer(email)}</span>元<br />` : ''}
        ${union ? `联盟广告：<span style='color:#E21918;font-size:16px;'>${union}</span>元<br />` : ''}
        ${video ? `视频广告：<span style='color:#E21918;font-size:16px;'>${video}</span>元<br />` : ''}
        ${visit ? `直接访问：<span style='color:#E21918;font-size:16px;'>${visit}</span>元<br />` : ''}
        ${search ? `视频引擎：<span style='color:#E21918;font-size:16px;'>${search}</span>元<br />` : ''}
        </div>`;
    };
    const { columns = [], rows } = mapdata;
    const _columns = columns.filter((item) => {
        const { field } = item;
        return checkes[field] || field === 'name';
    });
    const _mapdata = {
        columns: _columns,
        rows: rows.map(item => {
            const o = {};
            _columns.forEach(col => {
                const { field } = col;
                o[field] = item[field];
            });
            return o;
        })
    };
    const onChange = (args) => {
        const { target } = args;
        const { value, checked } = target;
        dispatch({
            type: 'regionalAnalysis/save',
            payload: {
                checkes: {
                    ...checkes,
                    [value]: checked
                }
            },
        });
    };
    const handleChange = (v) => {
        dispatch({
            type: 'regionalAnalysis/save',
            payload: {
                defaultKey: v
            },
        });
    };
    const footer = (
        <span style={{ lineHeight: "28px" }}>排名：
            <Select defaultValue={defaultKey} style={{ width: 160 }} onChange={handleChange}>
                {_columns.slice(1).map((row, j) => {
                    const { field, name } = row;
                    return (<Option value={field} key={j}>{name}</Option>);
                })}
            </Select>
        </span>
    );
    return (
        <Page loading={false} title={'地域性分析'} flex>
            <div style={{ width: '100%', minHeight: '70vh'/* height: 'calc(100vh - 240px)' */ }}>
                <ChinaMap
                    title={'地域分析'}
                    seriesName={'地域分析'}
                    data={_mapdata}
                    target={defaultKey}
                    loading={loading}
                    tooltipFormatter={formatter}
                />
                <div className={styles.list}>
                    <List
                        header={<div>分析值：（以下可多选）</div>}
                        footer={footer}
                        bordered
                        dataSource={columns.slice(1)}
                        renderItem={(item, i) => {
                            const { field, name } = item;
                            return (<List.Item key={i}><Checkbox value={field} checked={checkes[field] ? true : false} onChange={onChange}>{name} </Checkbox></List.Item>);
                        }}
                    />
                </div>
            </div>
        </Page>
    );
}
function mapStateToProps({ regionalAnalysis, loading }) {
    return {
        ...regionalAnalysis,
        loading: loading.models.regionalAnalysis,
    };
}

export default connect(mapStateToProps)(Index);