import { Form, Checkbox, Input, Select, Button } from 'antd';
function MyForm(props) {
    const { form, config, } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            debugger
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    const { getFieldDecorator } = form;
    const list = config.map((item, i) => {
        const { prop, value, type, component, des } = item;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        switch (component) {
            case 'Checkbox':
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(prop, {
                        initialValue: value,
                    })(
                        <Checkbox > {prop} </Checkbox>
                    )}
                </Form.Item>;
            case "Input":
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(prop, {
                        initialValue: value,
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input placeholder={prop} value={Input} />
                    )}
                </Form.Item>;
            case "Select":
                return <Form.Item
                    {...formItemLayout}
                    label={prop}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(prop, {
                        // initialValue: value[0],
                    })(
                        <Select>
                            {value.map((item, i) => <Select.Option value={item} key={i}>{item}</Select.Option>)}
                        </Select>
                    )}
                </Form.Item>;
            default:
                return null;
        }
    });
    return (
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            {list}
            <Form.Item
                wrapperCol={{ span: 12, offset: 5 }}
            >
                <Button type="primary" htmlType="submit"> Submit </Button>
            </Form.Item>
        </Form>
    );
}
export default Form.create()(MyForm);