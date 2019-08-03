import React, {Component} from 'react';
import TopNav from './TopNav'
import Sidebar from './Sidebar';
import MainRouter from './MainRouter';
import {Colxx, Row} from "../index";

class DefaultLayout extends Component {
    state = {
        menuState: 0,
        menuClassName: 'sub-hidden'
    };

    toggleMenuState = () => {
        let {menuState, menuClassName} = this.state;
        menuState++;
        if (menuState > 2) {
            menuState = 0;
        }
        menuClassName = menuState === 0 ? 'sub-hidden' : menuState === 1 ? 'menu-default' : 'menu-hidden';
        this.setState({menuState, menuClassName});
    };

    render() {
        let {history, mainRoutes,route} = this.props;
        return (
            <div id="app-container" className={this.state.menuClassName}>
                <TopNav toggleMenuState={this.toggleMenuState} history={history}/>
                <Sidebar/>
                <main>
                    <div className="container-fluid">
                        <Row className="mb-4">
                            <Colxx>
                                <MainRouter mainRoutes={mainRoutes}/>
                            </Colxx>
                        </Row>
                    </div>
                </main>
            </div>
        );
    }
}

export default DefaultLayout;