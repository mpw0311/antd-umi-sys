/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  用户登录组件
 */
import { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, Checkbox } from 'antd';
import { formatMessage } from 'umi/locale';
import styles from "./index.less";

const FormItem = Form.Item;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onSubmit } = this.props;
        form.validateFields({ force: true }, (errors, values) => {
            onSubmit(errors, values);
        });
    }
    render() {
        const { loading, form } = this.props;
        const {
            getFieldDecorator: fd,
        } = form;
        return (
            <div className={styles.login_form}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {fd('username', {
                            initialValue: 'admin',
                            rules: [{
                                required: true,
                                message: '请输入用户名!'
                            }]
                        })(
                            <Input prefix={<Icon type="user" className={styles.color} />} placeholder={formatMessage({ id: 'login.userName' })} />
                        )}
                    </FormItem>
                    <Row gutter={8}>
                        <Col span={16}>
                            <FormItem>
                                {fd('password', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" className={styles.color} />} type="password" placeholder={formatMessage({ id: 'login.password' })} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem>
                                {fd("googleToken", {
                                    initialValue: '123',
                                    rules: [{ required: true, message: '请输入口令!' }]
                                })(
                                    <Input prefix={<Icon type="mobile" className={styles.color} />} placeholder="口令" />
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem>
                        {fd('rememberMe', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>{formatMessage({ id: 'login.remember-me' })}</Checkbox>
                        )}
                        <a className={styles.login_form_forgot} href="/">{formatMessage({ id: 'login.forgot-password' })}</a>
                        <Button type="primary" htmlType="submit" className={styles.login_form_button} loading={loading}>
                            {formatMessage({ id: 'login.login' })}
                        </Button>
                        <a href="/#register">   {formatMessage({ id: 'login.signup' })}!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Login);