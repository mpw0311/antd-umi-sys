import React from 'react';
import { Row, Col, Form, DatePicker, Button } from 'antd';
import moment from 'moment';
import styles from '../index.less';

const { Item: FormItem } = Form;
const { RangePicker } = DatePicker;
function MyForm(props) {
    const { form, onSubmit, times } = props;
    const { getFieldDecorator, validateFields } = form;
    const dateFormat = 'YYYY/MM/DD';
    const dateConfig = {
        rules: [{ required: true, message: '请选择时间!' }],
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields({ force: true }, (errors, values) => {
            onSubmit(values);
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Row className={styles.form_row}>
                <Col span={12}>
                    <FormItem>
                        {getFieldDecorator('time', {
                            initialValue: times.map(item => moment(item)),
                            ...dateConfig
                        })(
                            <RangePicker format={dateFormat} />
                        )}
                    </FormItem>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">搜 索</Button>
                </Col>
            </Row>
        </Form>
    );
}


export default Form.create()(MyForm);
