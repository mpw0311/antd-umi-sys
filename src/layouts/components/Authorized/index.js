import { PureComponent } from 'react';
export default class Authorized extends PureComponent {
    render() {
        const { children, noMatch, diffMenuData, location: { pathname } } = this.props;
        const [res] = diffMenuData.filter(item => item.link === pathname);
        return res ? noMatch : children;
    }
}