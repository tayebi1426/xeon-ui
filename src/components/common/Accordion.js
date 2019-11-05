import React from "react";
import {Card, CardHeader, CardTitle, Col, Collapse} from "reactstrap";
import Icon from "./Icon";
import * as PropTypes from 'prop-types';

export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {collapse: this.props.collapse ? this.props.collapse : true};
    }

    toggle = () => {
        this.setState(state => ({collapse: !state.collapse}));
        if (!this.state.collapse && typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    };

    render() {
        const {headerStyle, titleStyle} = this.props;
        return (
            <>
                <Card>
                    <CardHeader style={{padding: '0px', backgroundColor: 'rgba(0,0,0,0.08)', ...headerStyle}}
                                onClick={this.toggle}>
                        <CardTitle>
                            <div className={'row'}>
                                <Col style={{marginRight: '10px', marginTop: '10px'}} lg={{size: 1}} md={{size: 1}}
                                     sm={1} xs={1}> <Icon code={'angle-double-down'}/></Col>
                                <Col style={{marginTop: '10px', ...titleStyle}} lg={4} md={4} sm={4}
                                     xs={4}>{this.props.title}</Col>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse}>
                        {this.props.children}
                    </Collapse>
                </Card>
            </>
        );
    }

}

Accordion.propTypes = {
    title: PropTypes.string,
    collapse: PropTypes.bool,
    headerStyle: PropTypes.object,
    titleStyle: PropTypes.object
};