import React, { Component } from 'react';
import { Row, Col, Form, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import styles from '../index.less';

const { Item: FormItem } = Form;
const { Option } = Select;
const { RangePicker } = DatePicker;
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: undefined,
            hide: "block"
        };
    }
    render() {
        const { form, dict = {}, onSubmit, events = [], pages = [],  /* onGetEvents: getEvents, onGetPages: getPages */ } = this.props;
        const { hide } = this.state;
        const { getFieldDecorator, validateFields } = form;
        const { infoTypeDict = [], eventCountDict = [], pageCountDict = [], platformType = [] } = dict;
        const InfoTypeOPtion = infoTypeDict.map((item, i) => (
            <Option value={item.value} key={i}>{item.name}</Option>
        ));
        const EventCountOPtion = eventCountDict.map((item, i) => (
            <Option value={item.value} key={i}>{item.name}</Option>
        ));
        const PageCountOPtion = pageCountDict.map((item, i) => (
            <Option value={item.value} key={i}>{item.name}</Option>
        ));
        const Events = events.map(d =>
            <Option key={d}>{d}</Option>
        );
        const Pages = pages.map(d =>
            <Option key={d}>{d}</Option>
        );
        const PlatformTypeOption = platformType.map(d =>
            <Option key={d.value}>{d.name}</Option>
        );
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const lgFormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 21 },
            },
        };
        const dateFormat = 'YYYY/MM/DD';
        const dateConfig = {
            rules: [{ required: true, message: '请选择时间!' }],
        };
        const selectConfig = { rules: [{ required: true, message: '不能为空' }] };
        const handleFilter = (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        // const children = [];
        // for (let i = 10; i < 36; i++) {
        //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        // }
        const handleSubmit = (e) => {
            e.preventDefault();
            validateFields({ force: true }, (errors, values) => {
                onSubmit(values);
            });
        };
        const platformTypeSelect = (v) => {
            if (v === "all") {
                this.setState({
                    hide: "none"
                });
            } else {
                this.setState({
                    hide: "block"
                });
            }
        };
        return (
            <div className={styles.content}>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Row>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="事件操作次数"
                            >
                                {getFieldDecorator('eventCount', {
                                    initialValue: "0",
                                    ...selectConfig
                                })(
                                    <Select
                                        showSearch
                                        placeholder="请选择"
                                        optionFilterProp="children"
                                        filterOption={handleFilter}
                                    >
                                        {EventCountOPtion}
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col span={16}>
                            <FormItem
                                {...lgFormItemLayout}
                                label="起始事件名称"
                            >
                                {getFieldDecorator('events', {
                                    initialValue: events[0],
                                    ...selectConfig
                                })(
                                    <Select
                                        mode="tags"
                                        showSearch
                                        placeholder={"请输入查询项"}
                                        defaultActiveFirstOption={false}
                                        filterOption={handleFilter}
                                        showArrow={false}
                                        notFoundContent={null}
                                    >
                                        {Events}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="页面浏览次数"
                            >
                                {getFieldDecorator('pageCount', {
                                    initialValue: "0",
                                    ...selectConfig
                                })(
                                    <Select
                                        showSearch
                                        placeholder="请选择"
                                        optionFilterProp="children"
                                        filterOption={handleFilter}
                                    >
                                        {PageCountOPtion}
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col span={16}>
                            <FormItem
                                {...lgFormItemLayout}
                                label="起始页面名称"
                                style={{ display: hide }}
                            >
                                {getFieldDecorator('pages', {
                                    initialValue: pages[0],
                                    ...selectConfig
                                })(
                                    <Select
                                        mode="tags"
                                        showSearch
                                        placeholder={"请输入查询项"}
                                        defaultActiveFirstOption={false}
                                        showArrow={false}
                                        filterOption={handleFilter}
                                        notFoundContent={null}
                                    >
                                        {Pages}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="统&nbsp;&nbsp;计&nbsp;&nbsp;类&nbsp;&nbsp;型"
                            >
                                {getFieldDecorator('infoType', {
                                    initialValue: 'pv',
                                    ...selectConfig
                                })(
                                    <Select
                                        showSearch
                                        placeholder="请选择"
                                        optionFilterProp="children"
                                        filterOption={handleFilter}
                                    >
                                        {InfoTypeOPtion}
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="平&nbsp;&nbsp;台&nbsp;&nbsp;类&nbsp;&nbsp;型"
                            >
                                {getFieldDecorator('platformType', {
                                    initialValue: "ios",
                                    ...selectConfig
                                })(
                                    <Select
                                        showSearch
                                        placeholder="请选择"
                                        optionFilterProp="children"
                                        filterOption={handleFilter}
                                        onSelect={platformTypeSelect}
                                    >
                                        {PlatformTypeOption}
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                {...formItemLayout}
                                label="时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间"
                            >
                                {getFieldDecorator('time', {
                                    initialValue: [moment(), moment()],
                                    ...dateConfig
                                })(
                                    <RangePicker
                                        format={dateFormat}
                                    // dateRender={(current) => {
                                    //     const style = {};
                                    //     if (current.date() === 1) {
                                    //         style.border = '1px solid #1890ff';
                                    //         style.borderRadius = '50%';
                                    //     }
                                    //     return (
                                    //         <div className="ant-calendar-date" style={style}>
                                    //             {current.date()}
                                    //         </div>
                                    //     );
                                    // }}
                                    />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">搜 索</Button>
                        </Col>
                    </Row>
                </Form>
            </div >
        );
    }
}


export default Form.create()(MyForm);
