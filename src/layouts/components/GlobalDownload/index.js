import { Icon } from 'antd';
import { Link } from 'dva/router';
import Context from '@context';

function Download(props) {
    const { userInfo } = props;
    const { userName } = userInfo;
    return (
        <Context.Consumer>
            {({ theme }) => (
                <Link to={{ pathname: "/download", state: { userName, key: 'down', pathtitles: ["下载任务列表"], } }} style={{ color: theme === 'dark' ? "#fff" : "rgba(0, 0, 0, 0.65)" }}>
                    <Icon type="download" /> 下载
               </Link>
            )}
        </Context.Consumer>
    );
}
export default Download;