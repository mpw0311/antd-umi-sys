/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import { Link } from 'umi';
import classNames from 'classnames';
// import Debounce from 'lodash-decorators/debounce';
// import Bind from 'lodash-decorators/bind';
import styles from './index.less';

const { Option } = AutoComplete;
class HeaderSearch extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onSearch: PropTypes.func,
        onPressEnter: PropTypes.func,
        onChange: PropTypes.func,
        defaultActiveFirstOption: PropTypes.bool,
        dataSource: PropTypes.array,
        defaultOpen: PropTypes.bool,
    };

    static defaultProps = {
        defaultActiveFirstOption: false,
        onPressEnter: () => { },
        onChange: () => { },
        onSearch: () => { },
        className: '',
        placeholder: '',
        dataSource: [],
        defaultOpen: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            searchMode: props.defaultOpen,
            value: '',
        };
    }
    onKeyDown = e => {
        if (e.key === 'Enter') {
            this.debouncePressEnter();
        }
    };

    onChange = value => {
        this.setState({ value });
        const { onChange } = this.props;
        if (onChange) {
            onChange(value);
        }
    };

    enterSearchMode = () => {
        this.setState({ searchMode: true }, () => {
            const { searchMode } = this.state;
            if (searchMode) {
                this.input.focus();
            }
        });
    };

    leaveSearchMode = () => {
        this.setState({
            searchMode: false,
            value: '',
        });
    };

    debouncePressEnter() {
        const { onPressEnter } = this.props;
        const { value } = this.state;
        onPressEnter(value);
    }
    // NOTE: 不能小于500，如果长按某键，第一次触发auto repeat的间隔是500ms，小于500会导致触发2次
    // @Bind()
    // @Debounce(500, {
    //     leading: true,
    //     trailing: false,
    // })
    render() {
        const { className, placeholder, dataSource, theme = 'dark', ...restProps } = this.props;
        const { searchMode, value } = this.state;
        delete restProps.defaultOpen; // for rc-select not affected
        const inputClass = classNames(styles.input, {
            [styles.show]: searchMode,
        });
        return (
            <span className={classNames(className, styles.headerSearch)} style={{ color: theme === 'dark' ? "#FFF" : 'rgba(0, 0, 0, 0.65)' }} onClick={this.enterSearchMode}>
                <Icon type="search" key="Icon" />
                <AutoComplete
                    key="AutoComplete"
                    {...restProps}
                    dataSource={dataSource.map((item) => {
                        const { title, key, link, ...restState } = item;
                        if (key === undefined || link === undefined || title === undefined) {
                            console.error('The key or link is not defined:', item)
                        }
                        return (
                            <Option
                                key={key}
                                value={key}
                                text={title}
                            >
                                <Link style={{ display: "block" }} to={{ pathname: link, query: { key: link.indexOf("frame") > -1 ? key : undefined }, state: { key, ...restState } }}>
                                    <span>{title}</span>
                                </Link>

                            </Option>
                        );
                    })}
                    className={inputClass}
                    style={{ color: theme === 'dark' ? "#FFF" : 'rgba(0, 0, 0, 0.65)' }}
                    value={value}
                    onChange={this.onChange}
                    optionLabelProp="text"
                >
                    <Input
                        placeholder={placeholder}
                        ref={node => {
                            this.input = node;
                        }}
                        onKeyDown={this.onKeyDown}
                        onBlur={this.leaveSearchMode}
                    />
                </AutoComplete>
            </span>
        );
    }
}
export default HeaderSearch;