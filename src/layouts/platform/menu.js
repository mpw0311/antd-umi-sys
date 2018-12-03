import { Menu, Icon } from 'antd';
function Index() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="upload" />
                <span>nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="upload" />
                <span>nav 5</span>
            </Menu.Item>
        </Menu>
    );
}
export default Index;