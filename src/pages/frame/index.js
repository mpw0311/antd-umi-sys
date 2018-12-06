import Redirect from 'umi/redirect';
import { frameDefultKey } from 'config';
export default () => <Redirect to={`/sys/frame/${frameDefultKey}`} />;