import React from 'react'
import {Tab, TabContainer,Card} from '../../core'

function TabBody(props) {
    return <div>Tab Content : {props.tabId}</div>;
}

const TAB_SCHEMA = [
    {tabId: 1, title: "Tab 1", component: TabBody, prop1: 55, prop2: 'fab'},
    {tabId: 2, title: "Tab 2", component: TabBody, prop1: 55, prop2: 'fab'},
    {tabId: 3, title: "Tab 3", component: TabBody, prop1: 55, prop2: 'fab'}
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
            <Card title="Tab Component (Dynamic)">
            <TabContainer tabs={TAB_SCHEMA}>
            </TabContainer>
            </Card>
            <Card title="Tab Component (Static)">
            <TabContainer>
                <Tab tabId={1} title="tab1">Tab 1</Tab>
                <Tab tabId={2} title="tab2">Tab 2</Tab>
                <Tab tabId={3} title="tab3">Tab 3</Tab>
                <Tab tabId={4} title="tab4">Tab 4</Tab>
            </TabContainer>
            </Card>
        </React.Fragment>
    }
}

export default TabComponent