import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle } from "reactstrap";

import IntlMessages from "../../../helpers/IntlMessages";
import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import CustomInputExample from "../../../containers/forms/CustomInputExample";
import ReactSelectExample from "../../../containers/forms/ReactSelectExample";
import ReactAutoSugegstExample from "../../../containers/forms/ReactAutoSugegstExample";
import DatePickerExamples from "../../../containers/forms/DatePickerExamples";
import DropzoneExample from "../../../containers/forms/DropzoneExample";
import TagsInputExample from "../../../containers/forms/TagsInputExample";
import SwitchExamples from "../../../containers/forms/SwitchExamples";
import SliderExamples from "../../../containers/forms/SliderExamples";
import RatingExamples from "../../../containers/forms/RatingExamples";

export default class JumbotronUi extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb
              heading="menu.form-components"
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.custom-inputs" />
                </CardTitle>
                <CustomInputExample />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.react-select" />
                </CardTitle>
                <ReactSelectExample />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.react-autosuggest" />
                </CardTitle>
                <Row className="mb-4">
                  <Col xxs="12" sm="6">
                    <ReactAutoSugegstExample />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <DatePickerExamples />

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.dropzone" />
                </CardTitle>
                <DropzoneExample />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.tags" />
                </CardTitle>
                <TagsInputExample />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <SwitchExamples />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.slider" />
                </CardTitle>
                <SliderExamples />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.rating" />
                </CardTitle>
                <RatingExamples />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
