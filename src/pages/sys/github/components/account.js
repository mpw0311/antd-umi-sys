import { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';

class Index extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onSubmit } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                onSubmit && onSubmit(values);
            }
        });
    }
    render() {
        const { form, value: defaultValue } = this.props;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, } = form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                // validateStatus={userNameError ? 'error' : ''}
                // help={userNameError || ''}
                >
                    {getFieldDecorator('account', {
                        initialValue: defaultValue,
                        rules: [{ required: true, message: 'Please input your account!' }],
                    })(
                        <Input prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Account" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        查询
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
export default Form.create({ name: 'account' })(Index);