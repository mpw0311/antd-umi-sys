import { Icon } from 'antd';
import { Link } from 'dva/router';
import { xlightning } from 'config';

function Download(props) {
    const { userInfo } = props;
    const { userName } = userInfo;
    return (
        <Link to={{ pathname: "/sys/frame", state: { userName,key:'down', pathtitles: ["下载任务列表"], url: `${xlightning}/downloadTask/toDownLoad` } }} style={{ color: "#fff" }}>
            <Icon type="download" /> 下载
            </Link>
    );
}
export default Download;