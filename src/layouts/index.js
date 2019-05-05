/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import BasicLayout from './basic';
import PlatformLayout from './platform';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (
    pathname === '/' ||
    pathname === '/login' ||
    pathname === '/register' ||
    /^\/initialize/.test(pathname) ||
    /^\/exception/.test(pathname)
  ) {
    return (<BasicLayout>{children}</BasicLayout>);
  }
  return (<PlatformLayout {...props}>{children}</PlatformLayout>);
}

export default Index;
