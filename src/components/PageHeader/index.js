/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  页面header
 */
import { PureComponent } from 'react';
import { Icon } from 'antd';
import Breadcrumb from './breadcrumb';
import isEqual from 'lodash/isEqual';
import classnames from 'classnames';
import { sysDefultPage } from '@platformConfig';
import styles from './index.less';
/*eslint-disable-next-line*/
const unique = (origin) => origin.filter(function (item, index, array) {
    return array.indexOf(item) === index;
});
class PageHeader extends PureComponent {
    state = {
        breadcrumbData: []
    }
    static defaultProps = {
        isShow: true,
        homePage: { title: '首页', icon: 'home', link: sysDefultPage.pathname }
    };
    componentDidMount() {
        this.getBreadcrumbList();
    }
    componentDidUpdate(preProps) {
        const { location, flattenMenuData } = this.props;
        if (!location || !preProps.location) {
            return;
        }
        const prePathname = preProps.location.pathname;
        if (prePathname !== location.pathname || !isEqual(flattenMenuData, preProps.flattenMenuData)) {
            this.getBreadcrumbList();
        }
    }
    getBreadcrumbList = () => {
        const { location: { pathname }, breadcrumbList, flattenMenuData, homePage } = this.props;
        const [menu = {}] = flattenMenuData.filter(item => item.link === pathname);
        const { pathtitles = [] } = menu;
        // const _pathtitles = this.filterPathtitles(pathtitles, breadcrumbList);
        // const breadcrumbData = unique([..._pathtitles, ...breadcrumbList]);
        const breadcrumbData = breadcrumbList || pathtitles;
        this.setState({
            breadcrumbData: [homePage, ...breadcrumbData]
        });
    }
    filterPathtitles = (pathtitles, breadcrumbList) => {
        if (!breadcrumbList && breadcrumbList.length > 0) return pathtitles;
        return pathtitles.map(title => {
            const [res] = breadcrumbList.filter(item => typeof item === 'object' ? (item.title === title) : (item === title));
            return res || title;
        });
    }
    render() {
        const { isShow, title, description } = this.props;
        const { breadcrumbData } = this.state;
        return (
            <div className={classnames(styles.wrapper, {
                [styles.hide]: !isShow,
            })}
            >
                <Breadcrumb breadcrumbList={breadcrumbData} />
                <h2 className={classnames(styles.title, {
                    [styles.hide]: !title,
                })}
                >{title}</h2>
                <p className={classnames(styles.describe, {
                    [styles.hide]: !description,
                })}
                ><Icon type="info-circle" />&nbsp;{description}</p>
            </div>
        );
    }
}
export default PageHeader;
