import { Component } from 'react';
import { Link } from 'dva/router';
import { Form, Input, Button, Select, Row, Col, Popover, Progress } from 'antd';
import styles from "./index.less";

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            confirmDirty: false,
            visible: false,
            help: '',
            prefix: '86',
            getPasswordStatus: this.getPasswordStatus.bind(this)
        };
    }
    getPasswordStatus = () => {
        const { form } = this.props;
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    };
    renderPasswordProgress = (passwordProgressMap) => {
        const { form } = this.props;
        const value = form.getFieldValue('password');
        const passwordStatus = this.getPasswordStatus();
        return value && value.length ? (
            <div className={styles[`progress-${passwordStatus}`]}>
                <Progress
                    status={passwordProgressMap[passwordStatus]}
                    className={styles.progress}
                    strokeWidth={6}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        ) : null;
    };
    render() {
        const { form, submitting } = this.props;
        const {
            // validateFields,
            getFieldDecorator: fd,
        } = form;
        const { count, prefix, help, visible } = this.state;

        const passwordStatusMap = {
            ok: <div className={styles.success}>强度：强</div>,
            pass: <div className={styles.warning}>强度：中</div>,
            poor: <div className={styles.error}>强度：太短</div>,
        };
        const passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            poor: 'exception',
        };
        return (
            <div className={styles.register_form}>
                <Form>
                    <FormItem>
                        {fd('mail', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入邮箱地址！',
                                },
                                {
                                    type: 'email',
                                    message: '邮箱地址格式错误！',
                                },
                            ],
                        })(<Input size="large" placeholder="邮箱" />)}
                    </FormItem>
                    <FormItem help={help}>
                        <Popover
                            content={
                                <div style={{ padding: '4px 0' }}>
                                    {passwordStatusMap[this.getPasswordStatus()]}
                                    {this.renderPasswordProgress(passwordProgressMap)}
                                    <div style={{ marginTop: 10 }}>
                                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                </div>
                                </div>
                            }
                            overlayStyle={{ width: 240 }}
                            placement="right"
                            visible={visible}
                        >
                            {fd('password', {
                                rules: [
                                    {
                                        validator: this.checkPassword,
                                    },
                                ],
                            })(<Input size="large" type="password" placeholder="至少6位密码，区分大小写" />)}
                        </Popover>
                    </FormItem>
                    <FormItem>
                        {fd('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码！',
                                },
                                {
                                    validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="确认密码" />)}
                    </FormItem>
                    <FormItem>
                        <InputGroup compact>
                            <Select
                                size="large"
                                value={prefix}
                                onChange={this.changePrefix}
                                style={{ width: '20%' }}
                            >
                                <Option value="86">+86</Option>
                                <Option value="87">+87</Option>
                            </Select>
                            {fd('mobile', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入手机号！',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '手机号格式错误！',
                                    },
                                ],
                            })(<Input size="large" style={{ width: '80%' }} placeholder="11位手机号" />)}
                        </InputGroup>
                    </FormItem>
                    <FormItem>
                        <Row gutter={8}>
                            <Col span={16}>
                                {fd('captcha', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入验证码！',
                                        },
                                    ],
                                })(<Input size="large" placeholder="验证码" />)}
                            </Col>
                            <Col span={8}>
                                <Button
                                    size="large"
                                    disabled={count}
                                    className={styles.getCaptcha}
                                    onClick={this.onGetCaptcha}
                                >
                                    {count ? `${count} s` : '获取验证码'}
                                </Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button
                            size="large"
                            loading={submitting}
                            className={styles.submit}
                            type="primary"
                            htmlType="submit"
                        >
                            注册
                        </Button>
                        <Link className={styles.login} to="/login">
                            使用已有账户登录
                        </Link>
                    </FormItem>
                </Form>
            </div>

        );
    }
}

export default Form.create()(Register);