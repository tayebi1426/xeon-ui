import React from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import {withTranslation} from '../../lib'

class Tabs extends React.PureComponent {

    constructor(props) {
        super(props);
        let firstChild = props.children[0];
        this.state = {activeTab: firstChild.props.tabId};
    }


    handleChangeTab(tabId) {
        this.setState({activeTab: tabId})
    }

    render() {
        let tabLinks = this.generateTabLinks();
        let tabPanes = this.generateTabPanes();

        return (
            <Nav tabs>
                <NavItem>
                    {tabLinks}
                </NavItem>
                <TabContent activeTab={ this.state.activeTab}>
                    {tabPanes}
                </TabContent>
            </Nav>
        );
    }

    generateTabLinks() {
        let {children, t} = this.props;
        let {activeTab} = this.state;
        return React.Children.map(children, (child) => {
            let {tabId, title, className = ''} = child.props;
            return React.createElement(NavLink, {
                    key: tabId,
                    onClick: this.handleChangeTab.bind(this, tabId),
                    className: activeTab === tabId ? `${className} active ` : className
                },
                t(title)
            )
        });
    }

    generateTabPanes() {
        let {children} = this.props;

        return React.Children.map(children, (child) => {
            let {tabId, children: tabBody} = child.props;
            return React.createElement(TabPane, {key: tabId, tabId}, tabBody)
        });
    }
}


export default withTranslation(Tabs);