import { Icon } from 'antd';
import { Link } from 'dva/router';
import { xlightning } from 'config';

function Download(props) {
    const { userInfo, theme = 'dark' } = props;
    const { userName } = userInfo;
    return (
        <Link to={{ pathname: "/download", state: { userName, key: 'down', pathtitles: ["下载任务列表"], url: `${xlightning}/downloadTask/toDownLoad` } }} style={{ color: theme === 'dark' ? "#fff" : "rgba(0, 0, 0, 0.65)" }}>
            <Icon type="download" /> 下载
        </Link>
    );
}
export default Download;