import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { HeaderSearch } from 'components';
import { searchFilter, searchEqual } from './_';
import styles from './index.less';

class Search extends Component {
    constructor(props) {
        super(props);
        const { dataSource } = this.props;
        this.state = {
            searchData: dataSource,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSearch(value) {
        const { menusData } = this.props;
        const dataSource = searchFilter(value, menusData);
        this.setState({
            searchData: dataSource,
        });
    }
    handleSelect(value) {
        const { dispatch } = this.props;
        const { searchData } = this.state;
        const res = searchEqual(value, searchData);
        const { link, key, query, ...rest } = res;
        if (link) {
            dispatch(routerRedux.push({
                pathname: link,
                query: { ...query, key: link.indexOf("frame") > -1 ? key : undefined },
                state: {
                    key,
                    ...rest,
                },
            }));
        }
    }
    render() {
        const { searchData, } = this.state;
        const { theme } = this.props;
        return (
            <HeaderSearch
                className={`${styles.action} ${styles.search}`}
                placeholder="站内搜索"
                dataSource={searchData}
                onSearch={value => {
                    this.handleSearch(value);
                }}
                onPressEnter={value => {
                    console.log('enter', value); // eslint-disable-line
                }}
                onSelect={value => {
                    this.handleSelect(value);
                }}
                theme={theme}
            />
        );
    }
}
export default Search;