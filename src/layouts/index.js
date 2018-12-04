import BasicLayout from './basic';
import MainLayout from './main';
import PlatformLayout from './platform';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (/^\/versions/.test(pathname)) {
    return (<PlatformLayout>{children}</PlatformLayout>);
  }
  if (pathname === '/' || pathname === '/login' || pathname === '/register' || /^\/initialize/.test(pathname)) {
    return (<BasicLayout>{children}</BasicLayout>);
  }
  return (
    <MainLayout location={location}>{children}</MainLayout>
  );
}

export default Index;
