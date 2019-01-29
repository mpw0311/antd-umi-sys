import { Component } from 'react';
import { Tabs } from 'antd';
import { DataTable } from '@components';

const { TabPane } = Tabs;
class Card4 extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange1(current, pageSize) {// eslint-disable-line
        const { dispatch } = this.props;
        dispatch({
            type: 'matchAnalysis/fechTable1',
            payload: {
                current,
                pageSize
            },
        });
    }
    handleChange2(current, pageSize) {// eslint-disable-line
        const { dispatch } = this.props;
        dispatch({
            type: 'matchAnalysis/fechTable2',
            payload: {
                current,
                pageSize
            },
        });
    }
    render() {
        const {
            category = [
                {
                    name: '全部',
                    value: 'all'
                },
                {
                    name: "1k-3k",
                    value: "1k-3k",
                },
                {
                    name: "3k-1w",
                    value: "3k-1w",
                },
                {
                    name: "1w-3w",
                    value: "1w-3w",
                },
                {
                    name: "3w-5w",
                    value: "3w-5w",
                },
                {
                    name: "5w-10w",
                    value: "5w-10w",
                },
                {
                    name: ">=10w",
                    value: ">=10w",
                },
            ],
            tableData01,
            tableData02,
            dispatch,
            loading
        } = this.props;
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="概况一览表" key="1">
                    <DataTable
                        data={tableData01}
                        loading={loading}
                        bordered
                        sort
                        selectProps={{
                            show: true,
                            defaultValue: ['all'],
                            data: category,
                            onChange: (value) => {
                                dispatch({
                                    type: 'matchAnalysis/fechTable1',
                                    payload: {
                                        selectKey: value
                                    },
                                });
                            }
                        }}
                        searchProps={{
                            show: true,
                            onSearch: (value) => {
                                dispatch({
                                    type: 'matchAnalysis/fechTable1',
                                    payload: {
                                        searchKey: value
                                    },
                                });
                            }
                        }}
                        sortIndexs={
                            ["name", "money"]
                        }
                        onPageChange={this.handleChange1}
                    />
                </TabPane>
                <TabPane tab="各额度匹配详情" key="2">
                    <DataTable
                        data={tableData02}
                        loading={loading}
                        bordered
                        sort
                        selectProps={{
                            show: true,
                            defaultValue: ['all'],
                            data: category,
                            onChange: (value) => {
                                dispatch({
                                    type: 'matchAnalysis/fechTable2',
                                    payload: {
                                        selectKey: value
                                    },
                                });
                            }
                        }}
                        searchProps={{
                            show: true,
                            onSearch: (value) => {
                                dispatch({
                                    type: 'matchAnalysis/fechTable2',
                                    payload: {
                                        searchKey: value
                                    },
                                });
                            }
                        }}
                        sortIndexs={
                            ["name", "money"]
                        }
                        onPageChange={this.handleChange2}
                    />
                </TabPane>
            </Tabs>
        );
    }
}
export default Card4;