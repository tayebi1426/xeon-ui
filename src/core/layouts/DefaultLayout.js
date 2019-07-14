import React, {Component} from 'react';
import TopNav from './TopNav'
import Sidebar from './Sidebar';
import MainRouter from './MainRouter';
import {Colxx, Row} from "../index";

class DefaultLayout extends Component {

    render() {
        return (
            <div id="app-container">
                <TopNav history={this.props.history}/>
                <Sidebar/>
                <main style={{backgroundColor: ''}}>
                    <div className="container-fluid">
                        <Row className="mb-4">
                            <Colxx>
                                <MainRouter mainRoutes={this.props.mainRoutes}/>
                            </Colxx>
                        </Row>
                    </div>
                </main>
            </div>
        );
    }
}

export default DefaultLayout;