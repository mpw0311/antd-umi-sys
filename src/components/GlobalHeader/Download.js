import { Icon } from 'antd';
import { Link } from 'dva/router';

function Download(props) {
    const { userInfo } = props;
    const { userName } = userInfo;
    const xlightning = document.head.dataset.api || "http://xlightning.jianlc.cn";
    return (
        <Link to={{ pathname: "/sys/frame", state: { userName, pathtitles: ["下载任务列表"], url: `${xlightning}/downloadTask/toDownLoad` } }} style={{ color: "#fff" }}>
            <Icon type="download" /> 下载
            </Link>
    );
}
export default Download;