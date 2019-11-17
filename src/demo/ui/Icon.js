import React from 'react'
import {Card, Col, Icon, Row} from '../../core'

class IconDemo extends React.Component {

    render() {
        return <React.Fragment>
            <Card title="Icon">
                <Row>
                    <Col md="1">
                        <Icon code="home" size="4x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="home" size="3x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="home" size="2x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="home" size="1x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="home" size="sm"/>
                    </Col>
                    <Col md="1">
                        <Icon code="home" size="xs"/>
                    </Col>
                </Row>
                <Row>
                    <Col md="1">
                        <Icon code="camera" color="plum" size="4x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="camera" color="orchid" size="3x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="camera" color="red" size="2x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="camera" color="lightseagreen" size="1x"/>
                    </Col>
                    <Col md="1">
                        <Icon code="camera" color="blue" size="sm"/>
                    </Col>
                    <Col md="1">
                        <Icon code="camera" color="#fd7e14" size="xs"/>
                    </Col>
                </Row>
            </Card>

        </React.Fragment>
    }
}

export default IconDemo