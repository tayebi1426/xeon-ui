import React from 'react'
import {TabContent, TabPane} from 'reactstrap';
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
            <div>
                <ul className="nav nav-tabs">
                    {tabLinks}
                </ul>
                <TabContent activeTab={ this.state.activeTab}>
                    {tabPanes}
                </TabContent>
            </div>
        );
    }

    generateTabLinks() {
        let {children, t} = this.props;
        let {activeTab} = this.state;
        return React.Children.map(children, (child) => {
            let {tabId, title, className = ''} = child.props;
            return (<li onClick={this.handleChangeTab.bind(this, tabId)} key={tabId}
                        className={activeTab === tabId ? `nav-item nav-link  active ${className}` : `nav-item nav-link  ${className}`}>{t(title)}</li>)

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