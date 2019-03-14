import { Form, Checkbox, Button, Collapse, Select, Input } from 'antd';
import config from './data/config.json';
const Panel = Collapse.Panel;
function MyForm(props) {
    const { form, onChange, type } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                onChange && onChange(values);
            }
        });
    };
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };
    const getFormItem = (item, i) => {
        const { name, component, value, des } = item;
        switch (component) {
            case 'Checkbox':
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(name, {
                        valuePropName: 'checked',
                        initialValue: value,
                    })(
                        <Checkbox > {name} </Checkbox>
                    )}
                </Form.Item>;
            case "Input":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(name, {
                        initialValue: value,
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input placeholder={name} />
                    )}
                </Form.Item>;
            case "Select":
                return <Form.Item
                    {...formItemLayout}
                    label={name}
                    help={des}
                    key={`item${i}`}
                >
                    {getFieldDecorator(name, {
                        initialValue: value[0],
                    })(
                        <Select>
                            {value.map((item, i) => <Select.Option key={i} value={item}>{item}</Select.Option>)}
                        </Select>
                    )}
                </Form.Item>;
            default:
                return null;
        }
    };
    const type_dict = {
        "A": [
            'basic',
            'title',
            'legend',
            'grid',
            'tooltip',
            'toolbox',
            'xAxis',
            'yAxis',
            'series'
        ],
        "B": [
            'basic',
            'title',
            'legend',
            'tooltip',
            'toolbox',
            'series'
        ]
    };
    return (
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <Collapse accordion>
                {
                    type_dict[type || 'A'].map(name => {
                        return (
                            <Panel header={name} key={name}>
                                {
                                    config[name].map((item, i) => {
                                        return getFormItem(item, i);
                                    })
                                }
                            </Panel>
                        );
                    })
                }
            </Collapse>
            <Form.Item
                wrapperCol={{ span: 12, offset: 5 }}
            >
                <Button type="primary" htmlType="submit"> Submit </Button>
            </Form.Item>
        </Form>
    );
}
export default Form.create()(MyForm);