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
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setState({
                    visible: true
                });
            }, 6000)
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
                style={{ marginTop: 140 }}
            >
                {/* eslint-disable-next-line */}
                <p>如果你喜欢这个项目请给一个⭐，谢谢!</p>
                <p>Please give me a Star if you like this project.Thank you so much.</p>
            </Modal>
        );
    }
}