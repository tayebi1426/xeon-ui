import React, { Component, Fragment } from "react";
import {
  Alert,
  UncontrolledAlert,
  Row,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import NotificationExamples from "../../../containers/ui/NotificationExamples";

export default class AlertsUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  onDismiss =()=> {
    this.setState({ visible: false });
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.alerts" match={this.props.match} />
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row>
          <Col xxs="12" className="mb-4">
            <NotificationExamples />
          </Col>

          <Col xxs="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.rounded" />
                </CardTitle>
                <Alert color="primary" className="rounded">
                  <IntlMessages id="alert.primary-text" />
                </Alert>
                <Alert color="secondary" className="rounded">
                  <IntlMessages id="alert.secondary-text" />
                </Alert>
                <Alert color="success" className="rounded">
                  <IntlMessages id="alert.success-text" />
                </Alert>
                <Alert color="danger" className="rounded">
                  <IntlMessages id="alert.danger-text" />
                </Alert>
                <Alert color="warning" className="rounded">
                  <IntlMessages id="alert.warning-text" />
                </Alert>
                <Alert color="info" className="rounded">
                  <IntlMessages id="alert.info-text" />
                </Alert>
                <Alert color="light" className="rounded">
                  <IntlMessages id="alert.light-text" />
                </Alert>
                <Alert color="dark" className="rounded">
                  <IntlMessages id="alert.dark-text" />
                </Alert>
              </CardBody>
            </Card>
          </Col>

          <Col xxs="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.default" />
                </CardTitle>
                <Alert color="primary">
                  <IntlMessages id="alert.primary-text" />
                </Alert>
                <Alert color="secondary">
                  <IntlMessages id="alert.secondary-text" />
                </Alert>
                <Alert color="success">
                  <IntlMessages id="alert.success-text" />
                </Alert>
                <Alert color="danger">
                  <IntlMessages id="alert.danger-text" />
                </Alert>
                <Alert color="warning">
                  <IntlMessages id="alert.warning-text" />
                </Alert>
                <Alert color="info">
                  <IntlMessages id="alert.info-text" />
                </Alert>
                <Alert color="light">
                  <IntlMessages id="alert.light-text" />
                </Alert>
                <Alert color="dark">
                  <IntlMessages id="alert.dark-text" />
                </Alert>
              </CardBody>
            </Card>
          </Col>

          <Col xxs="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.dismissing" />
                </CardTitle>
                <Alert
                  color="warning"
                  className="rounded"
                  isOpen={this.state.visible}
                  toggle={this.onDismiss}
                >
                  <IntlMessages id="alert.dismissing-text" />
                </Alert>
                <UncontrolledAlert color="warning" fade={false}>
                  <IntlMessages id="alert.dismissing-without-animate-text" />
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}