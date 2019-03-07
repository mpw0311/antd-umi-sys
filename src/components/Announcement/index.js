/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { Alert } from 'antd';

function Announcement(props) {
    const {
        handleClose = () => { },
        title = "公告",
        description = ""
    } = props;
    const onClose = (e) => {
        handleClose(e);
    };
    if (description !== "") {
        return (
            <Alert
                message={title}
                description={description}
                type="error"
                closable
                onClose={onClose}
            />
        );
    } else {
        return (<span style={{ display: 'none' }} />);
    }
}
export default Announcement;