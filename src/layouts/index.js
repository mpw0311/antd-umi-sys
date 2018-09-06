import LoginLayout from './login';
import MainLayout from './main';

function BasicLayout(props) {
  const { location, children } = props;
  if (location.pathname === '/login' || location.pathname === '/register') {
    return (<LoginLayout>{children}</LoginLayout>);
  }
  return (
    <MainLayout location={location}>{children}</MainLayout>
  );
}

export default BasicLayout;
