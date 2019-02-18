import { Component } from 'react';
import { Drawer } from 'antd';
class GlobalDrawer extends Component {
    constructor(props) {
        super(props);
        const { visible = false } = props;
        this.state = {
            visible: visible
        };
        this.onClose = this.onClose.bind(this);
    }
    onClose() {
        const { visible } = this.state;
        this.setState({
            visible: !visible
        });
    }
    render() {
        return (
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer >
        );
    }
}

export default GlobalDrawer;
