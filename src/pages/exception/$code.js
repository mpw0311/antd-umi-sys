/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { Exception } from '@components';
import pathToRegexp from 'path-to-regexp';

export default function (props) {
    const { location: { pathname } } = props;
    const [, code] = pathToRegexp('/exception/:code').exec(pathname);
    return (
        <Exception
            type={code}
            backText={'返回登录'}
            redirect={{ pathname: "/" }}
            title={code}
            // desc={'抱歉，你无权访问该页面'}
        />
    );
}
