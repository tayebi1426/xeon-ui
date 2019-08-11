import React from 'react'
import {Tab, TabContainer} from '../../core/components/tab'

function TabBody(props) {
    return <div>Tab Content : {props.tabId}</div>;
}

const TAB_DEFS = [
    {tabId: 1, title: "Tab 1", component: TabBody, prop1: 55, prop2: 'fab'}
];

class TabComponent extends React.Component {
    state = {
        activeTab: null
    };

    toggleTabs = (activeTab) => {
        console.debug('activeTab : ', activeTab);
        this.setState({activeTab});
    };

    render() {
        return <React.Fragment>
            <TabContainer tabs={TAB_DEFS}>
                <Tab tabId={1} title="tab1">Tab 1</Tab>
                <Tab tabId={2} title="tab2">Tab 2</Tab>
                <Tab tabId={3} title="tab3">Tab 3</Tab>
                <Tab tabId={4} title="tab4">Tab 4</Tab>
            </TabContainer>
        </React.Fragment>
    }
}

export default TabComponent