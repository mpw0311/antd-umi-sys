/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
class PwdFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            verification: undefined
        };
    }
    render() {
        const { form, onSubmit = () => { }, onConfirm = () => { } } = this.props;
        const { verification, status } = this.state;
        const { getFieldDecorator, getFieldValue, validateFields } = form;
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
        const formItemConfig = { rules: [{ required: true, message: '不能为空' }] };
        const handleSubmit = (e) => {
            e.preventDefault();
            validateFields({ force: true }, (errors, values) => {
                onSubmit(values);
            });
        };
        const handleConfirmBlur = (e) => {
            e.preventDefault();
            const value = e.target.value;
            const res = onConfirm(value); // eslint-disable-line
            const verification = {
                validateStatus: res ? "success" : "error",
                help: res ? "" : "密码错误，请重新输入！"
            };
            this.setState({
                verification,
                status: res
            });
        };
        const compareToFirstPassword = (rule, value, callback) => {
            if (value && value !== getFieldValue('password')) {
                callback('两次输入密码不一致!');
            } else {
                callback();
            }
        };
        return (
            <Form onSubmit={handleSubmit} className="login-form">
                <FormItem
                    {...formItemLayout}

                    hasFeedback
                    label="原始密码"
                    {...verification}
                >
                    {getFieldDecorator('key0', {
                        ...formItemConfig
                    })(
                        <Input type="password" placeholder="请输入原始密码" onBlur={handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="新密码"
                >
                    {getFieldDecorator('password', {
                        ...formItemConfig
                    })(
                        <Input type="password" placeholder="请输入新密码" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="确认密码"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '不能为空!',
                        }, {
                            validator: compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" placeholder="请再次输入新密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className={styles.submit} disabled={!status}>修改密码</Button>
                </FormItem>
            </Form>
        );
    }
}
export default Form.create()(PwdFrom);