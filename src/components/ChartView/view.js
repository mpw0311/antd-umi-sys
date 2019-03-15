import { PureComponent, cloneElement } from 'react';
import Option from './option';
import { Row, Col } from 'antd';

export default class PageMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { children: { props: { data } } } = nextProps;
        if (prevState.data === undefined) {
            return {
                data
            };
        } else {
            return prevState;
        }
    }
    render() {
        const { children, type } = this.props;
        const { data } = this.state;
        const handleBlur = (data) => {
            this.setState({
                data
            });
        };
        const handleChange = (values) => {
            this.setState({
                ...values
            });
        };
        return (
            <Row gutter={16}>
                <Col span={10}>
                    <Option type={type} data={data} onBlur={handleBlur} onChange={handleChange} />
                </Col>
                <Col span={14}>
                    {cloneElement(children, { ...this.state })}
                </Col>
            </Row>
        );
    }
}