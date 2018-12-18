import { PureComponent } from 'react';
import { Row, Col, DatePicker, Button, Icon, Form, message } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
let id = 0;
const dateFormat = 'YYYY/MM/DD';
const initTime = moment().subtract(1, 'days');
const rowLayout = {
    xs: {
        span: 24
    },
    sm: {
        span: 12
    },
    md: {
        span: 8
    },
    lg: {
        span: 6
    },
    xl: {
        span: 4
    }
};
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};
const itemStyle = {
    marginBottom: 0
};
class Index extends PureComponent {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form, limit = 10 } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        if (keys.length >= limit) {
            message.warning(`允许最多添加${limit}个！`);
            return false;
        };
        const nextKeys = keys.concat(++id);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmit = () => { } } = this.props;
        const times = [];
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Received values of form: ', err, values);
            }
            const { keys, names } = values;
            for (const v of keys) {
                times.push(moment(names[v]).format(dateFormat));
            }
            handleSubmit(times);
        });
    }
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;

        getFieldDecorator('keys', { initialValue: [0] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Col {...rowLayout} key={index}>
                <FormItem
                    {...(index !== 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index !== 0 ? 'VS' : ''}
                    required={false}
                    style={itemStyle}
                    colon={false}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        initialValue: initTime,
                        rules: [{
                            required: true,
                            message: "请选择时间",
                        }],
                    })(
                        <DatePicker style={{ width: '80%', marginRight: 6 }} format={dateFormat} allowClear={false} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            </Col>
        ));
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    {formItems}
                    <Col {...rowLayout} style={{ display: 'flex' }}>
                        <FormItem style={itemStyle} >
                            <Button type="dashed" onClick={this.add} style={{ marginRight: 20 }}>
                                <Icon type="plus" />  添加
                            </Button>
                        </FormItem>
                        <FormItem style={itemStyle}>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}
export default Form.create()(Index);

Index.propTypes = {
    handleSubmit: PropTypes.func,
    limit: PropTypes.number
};