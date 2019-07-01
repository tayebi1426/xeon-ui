import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import TopNav from './TopNav'
import Sidebar from './Sidebar';
import {Colxx, Row} from "../index";

class DefaultLayout extends Component {

    componentDidMount() {
        console.log('this.props : ', this.props);
        this.props.loadAppMenus('154');
    }

    render() {
        const {menus} = this.props;

        return (
            <div id="app-container">
                <TopNav history={this.props.history}/>
                <Sidebar/>
                <main style={{backgroundColor: ''}}>
                    <div className="container-fluid">
                        <Row className="mb-4">
                            <Colxx>
                                <Switch>
                                    {
                                        menus.map(r => {
                                            return <Route key={r.path} {...r}/>
                                        })
                                    }
                                </Switch>
                            </Colxx>
                        </Row>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadAppMenus: (appCode) => dispatch({type: 'LOAD_APP_MENU', payload: {appCode}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);