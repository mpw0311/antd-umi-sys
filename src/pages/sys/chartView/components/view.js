import { Row, Col, Card } from 'antd';
import ChartTab from './tab';

export default function (props) {
    const { children, title, data, onBlur = () => { }, rows } = props;// eslint-disable-line
    const handleBlur = (value) => {
        onBlur(value);
    };
    return (
        <Card title={title} bordered={false} bodyStyle={{ padding: '0 10px' }}>
            <Row gutter={16}>
                <Col span={10}>
                    <ChartTab data={data} onBlur={handleBlur} rows={rows} />
                </Col>
                <Col span={14}>
                    {children}
                </Col>
            </Row>
        </Card>
    );
}