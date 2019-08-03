import React from 'react'
import {TabContent, TabPane} from 'reactstrap';
import {withTranslation,hasReactChildren,isFunction} from '../../lib'
import PropTypes from "prop-types";

class TabContainer extends React.PureComponent {

    constructor(props) {
        super(props);
        let activeTab;
        let {children, tabs} = props;
        if (tabs && tabs.length > 0) {
            activeTab = tabs[0].tabId
        } else if (hasReactChildren(children)) {
            activeTab = children[0].props.tabId
        }
        this.state = {activeTab: activeTab};
    }

    handleChangeTab(tabId) {
        this.setState({activeTab: tabId});
        let onChangeTab = this.props.onChangeTab;
        if (isFunction(onChangeTab)) {
            onChangeTab(tabId);
        }
    }

    render() {
        let tabLinks = this.generateTabLinks();
        let tabPanes = this.generateTabPanes();

        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabLinks}
                </ul>
                <TabContent activeTab={this.state.activeTab}>
                    {tabPanes}
                </TabContent>
            </div>
        );
    }

    generateTabLinks() {
        let {activeTab} = this.state;
        let {children, tabs, t} = this.props;
        if (tabs && tabs.length > 0) {
            return tabs.map(({tabId, title, className}) => this.generateTabLink(t, activeTab, tabId, title, className));
        }

        return React.Children.map(children, ({props}) => this.generateTabLink(t, activeTab, props.tabId, props.title, props.className), null);
    }

    generateTabPanes() {
        let {children, tabs} = this.props;
        if (tabs && tabs.length > 0) {
            return tabs.map(({tabId, component}) =>
                React.createElement(TabPane, {key: tabId, tabId},
                    React.createElement(component, {tabId})));
        }

        return React.Children.map(children, (child) => {
            let {tabId, children: tabBody} = child.props;
            return React.createElement(TabPane, {key: tabId, tabId}, tabBody)
        });
    }

    generateTabLink(t, activeTab, tabId, title, className = '') {
        return <li onClick={this.handleChangeTab.bind(this, tabId)} key={tabId} className={`nav-item ${className}`}>
            <a className={activeTab === tabId ? 'nav-link active' : 'nav-link'}>
                {t(title)}
            </a>
        </li>
    }
}

TabContainer.propTypes = {
    tabs: PropTypes.array,
    onChangeTab: PropTypes.func,
};
TabContainer.defaultProps = {};

export default withTranslation(TabContainer);