import Redirect from 'umi/redirect';
import { defaultMenu } from 'config';
const { pathname, search, state } = defaultMenu;
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname,
    search,
    state
}} />;