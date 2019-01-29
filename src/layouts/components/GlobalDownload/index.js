import { Icon } from 'antd';
import { Link } from 'dva/router';
import { Consumer } from '@components';

const themeConfig = {
    dark: {
        color: '#fff'
    },
    light: {
        color: 'rgba(0, 0, 0, 0.65)'
    },
};
function Download(props) {
    const { userInfo, theme = 'dark' } = props;
    const { userName } = userInfo;
    return (
        <Link
            to={{ pathname: "/download", state: { userName, key: 'down', pathtitles: ["下载任务列表"], } }}
            style={{ color: themeConfig[theme].color }
            }>
            <Icon type="download" /> 下载
        </Link>
    );
}
export default Consumer(Download);