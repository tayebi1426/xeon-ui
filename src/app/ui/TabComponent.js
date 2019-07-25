import React from 'react'
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';

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
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={this.state.activeTab === 'Tab1'?' active' :'' }
                        onClick={this.toggleTabs.bind(this, 'Tab1')}>
                        Tab1
                    </NavLink>
                    <NavLink
                        className={this.state.activeTab === 'Tab2'?' active' :'' }
                        onClick={this.toggleTabs.bind(this, 'Tab2')}>
                        Tab2
                    </NavLink>
                </NavItem>
                <TabContent activeTab={this.state.activeTab} style={{width: '100%'}}>
                    <TabPane tabId='Tab1'>
                        <Row>
                            <Col sm="12">
                                <h4>
                                    TAB-1
                                </h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='Tab2'>
                        <Row>
                            <Col sm="12">
                                <h4>
                                    TAB-2
                                </h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Nav>
        </React.Fragment>
    }
}

export default TabComponent