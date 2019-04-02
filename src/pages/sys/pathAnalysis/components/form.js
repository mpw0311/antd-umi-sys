import React, { Component } from 'react';
import { Row, Col, Form, Select, DatePicker, Button, Radio } from 'antd';
import moment from 'moment';
import styles from '../index.less';

const { Item: FormItem } = Form;
const { Option } = Select;
const { MonthPicker, WeekPicker } = DatePicker;
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: undefined,
            hide: "1",
            timetype: 'day'
        };
    }
    handleSizeChange = (e) => {
        const { handleGetDict = () => { } } = this.props;
        const radioValue = e.target.value;
        handleGetDict(radioValue);
        this.setState({
            timetype: radioValue
        });
    }
    render() {
        const { form, dict = {}, onSubmit, events = [], pages = [], /* onGetEvents: getEvents, onGetPages: getPages */ } = this.props;
        const { hide, timetype } = this.state;
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
                sm: { span: 12 },
                md: { span: 12 },
                lg: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 12 },
                lg: { span: 14 },
            },
        };
        const lgFormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 5 },
                lg: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                md: { span: 19 },
                sm: { span: 16 },
                lg: { span: 20 },
            },
        };
        const dateFormat = 'YYYY/MM/DD';
        const monthFormat = 'YYYY/MM';
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
                    hide: "0"
                });
            } else {
                this.setState({
                    hide: "1"
                });
            }
        };
        const getTime = (t) => {
            let tt = null;
            const initTime = moment().subtract(1, 'days');
            const day = (
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('time', {
                        ...dateConfig,
                        initialValue: initTime,
                    })(
                        <DatePicker
                            format={dateFormat}
                        />
                    )}
                </FormItem>
            );
            const week = (
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('time', {
                        ...dateConfig,
                        initialValue: initTime,
                    })(
                        <WeekPicker />
                    )}
                </FormItem>
            );
            const month = (
                <FormItem
                    {...formItemLayout}
                >
                    {getFieldDecorator('time', {
                        ...dateConfig,
                        initialValue: initTime,
                    })(
                        <MonthPicker format={monthFormat} />
                    )}
                </FormItem>
            );
            switch (t) {
                case 'day':
                    tt = day;
                    break;
                case 'month':
                    tt = month;
                    break;
                case 'week':
                    tt = week;
                    break;
                default:
                    tt = day;
            }
            return tt;
        };
        const Time = getTime(timetype);
        return (
            <div className={styles.content}>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Row>
                        <Col
                            md={24}
                            lg={8}
                            xl={6}
                        >
                            <FormItem
                                {...formItemLayout}
                                label="事件操作次数"
                            >
                                {getFieldDecorator('eventCount', {
                                    initialValue: "500",
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
                            <FormItem
                                {...formItemLayout}
                                label="页面浏览次数"
                            >
                                {getFieldDecorator('pageCount', {
                                    initialValue: "500",
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
                        <Col
                            md={24}
                            lg={16}
                            xl={18}
                        >
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
                            <FormItem
                                {...lgFormItemLayout}
                                label="起始页面名称"
                                style={{ opacity: hide }}
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
                            <Row>
                                <Col
                                    sm={24}
                                    md={24}
                                    lg={10}
                                >
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
                                                style={{ maxWidth: '200px' }}
                                                onSelect={platformTypeSelect}
                                            >
                                                {PlatformTypeOption}
                                            </Select>,
                                        )}
                                    </FormItem>
                                </Col>
                                <Col
                                    sm={24}
                                    md={24}
                                    lg={12}
                                >
                                    <Row>
                                        <Col span={12} style={{ textAlign: 'right', lineHeight: '36px' }}>
                                            <FormItem
                                                style={{ textAlign: 'right' }}
                                            >
                                                {getFieldDecorator('timeType', {
                                                    initialValue: "day",
                                                    ...selectConfig
                                                })(
                                                    <Radio.Group size={"small"} onChange={this.handleSizeChange}>
                                                        <Radio.Button value="day">日</Radio.Button>
                                                        <Radio.Button value="week">周</Radio.Button>
                                                        <Radio.Button value="month">月</Radio.Button>
                                                    </Radio.Group>
                                                )}:
                                            </FormItem>
                                        </Col>
                                        <Col
                                            span={12}
                                        >
                                            {Time}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    sm={24}
                                    md={24}
                                    lg={1}
                                    style={{ textAlign: 'right' }}
                                >
                                    <Button type="primary" htmlType="submit">搜 索</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div >
        );
    }
}

export default Form.create()(MyForm);
