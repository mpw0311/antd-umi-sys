import Redirect from 'umi/redirect';
import { sysDefultPage } from '@config';
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{...sysDefultPage}} />;