import { PureComponent } from 'react';
import { Modal } from 'antd';
export default class Started extends PureComponent {
    state = {
        visible: false
    }
    componentDidMount() {
        this.testStarted();
    }
    testStarted = () => {
        const started = localStorage.getItem('started');
        if (started !== 'true') {
            this.setState({
                visible: true
            });
        }
    }
    giveStar = () => {
        localStorage.setItem('started', true);
        this.setState({
            visible: false
        });
        window.location.href = 'https://github.com/mpw0311/antd-umi-sys';
    }
    handleCancel = () => {
        this.setState({
            visible: false
        });
    }
    render() {
        const { visible } = this.state;
        return (
            <Modal
                // title="Give me a star,please."
                visible={visible}
                onOk={this.giveStar}
                onCancel={this.handleCancel}
            >
                <p>如果你喜欢这个项目请给一个⭐，谢谢!</p>
                <p>Please&nbsp;give&nbsp;me a Star if you like this&nbsp;project.Thank you so much.</p>
            </Modal>
        );
    }
}