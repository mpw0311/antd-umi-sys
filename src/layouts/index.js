import BasicLayout from './basic';
// import MainLayout from './main';
import PlatformLayout from './platform';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  // if (/^\/sys/.test(pathname)) {
  //   return (
  //     <MainLayout location={location}>{children}</MainLayout>
  //   );
  // }
  if (pathname === '/' || pathname === '/login' || pathname === '/register' || /^\/initialize/.test(pathname)) {
    return (<BasicLayout>{children}</BasicLayout>);
  }
  return (<PlatformLayout {...props}>{children}</PlatformLayout>);
}

export default Index;
