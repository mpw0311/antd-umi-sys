import { PureComponent } from 'react';
// import { Consumer } from '@components';
import { connect } from 'dva';
import Breadcrumb from './breadcrumb';
import styles from './index.less';

// const breadcrumbList = ['首页', '一级面包屑', '当前页面'];
// const routes = [{
//     path: 'index',
//     name: '首页',
//     // icon: 'home'
// }, {
//     path: 'first',
//     name: '一级面包屑'
// }, {
//     path: 'second',
//     name: '当前页面'
// }];
const unique = (origin) => origin.filter(function (item, index, array) {
    return array.indexOf(item) === index;
});
class PageHeader extends PureComponent {
    state = {
        breadcrumbData: []
    }
    static defaultProps = {
        isShow: true,
        breadcrumbList: []
    };
    componentDidMount() {
        this.getBreadcrumbList();
    }
    componentDidUpdate(preProps) {
        const { location } = this.props;
        if (!location || !preProps.location) {
            return;
        }
        const prePathname = preProps.location.pathname;
        if (prePathname !== location.pathname) {
            this.getBreadcrumbList();
        }
    }
    getBreadcrumbList = () => {
        const { location: { pathname }, breadcrumbList, flattenMenuData } = this.props;
        const [menu = {}] = flattenMenuData.filter(item => item.link === pathname);
        const { pathtitles = [] } = menu;
        const _pathtitles = pathtitles.map(title => {
            const [res] = breadcrumbList.filter(item => typeof item === 'object' ? (item.title === title) : (item === title));
            return res || title;
        });
        const breadcrumbData = unique([..._pathtitles, ...breadcrumbList]);
        this.setState({
            breadcrumbData
        });
    }
    render() {
        const { isShow } = this.props;
        const { breadcrumbData } = this.state;
        return (isShow ? <Breadcrumb breadcrumbList={breadcrumbData} /> : '');
    }
}
export default PageHeader;
