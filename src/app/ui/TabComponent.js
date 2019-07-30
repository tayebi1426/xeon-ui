import React from 'react'

import {Tabs,Tab} from '../../core/components/tab'

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
            <Tabs >
                <Tab tabId={1} title="tab1">Tab 1</Tab>
                <Tab tabId={2} title="tab2">Tab 2</Tab>
                <Tab tabId={3} title="tab3">Tab 3</Tab>
                <Tab tabId={4} title="tab4">Tab 4</Tab>
            </Tabs>
        </React.Fragment>
    }
}

export default TabComponent