import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import { Col, Separator } from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";

export default class ThirdLevel1 extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Col xxs="12">
                <Breadcrumb heading="menu.third-level-1" match={this.props.match} />
                <Separator className="mb-5" />
              </Col>
            </Row>
            <Row>
              <Col xxs="12" className="mb-4">
                <p><IntlMessages id="menu.third-level-1"/></p>
              </Col>
            </Row>
          </Fragment>
        )
    }
}
