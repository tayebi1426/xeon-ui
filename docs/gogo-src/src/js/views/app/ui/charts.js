import React, { Component, Fragment } from "react";
import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import IntlMessages from "../../../helpers/IntlMessages";
import { Row, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import {
  DoughnutChart,
  LineChart,
  PolarAreaChart,
  AreaChart,
  ScatterChart,
  BarChart,
  RadarChart,
  PieChart
} from "../../../components/charts";

import {
  lineChartData,
  polarAreaChartData,
  areaChartData,
  scatterChartData,
  barChartData,
  radarChartData,
  pieChartData,
  doughnutChartData
} from "../../../data/charts";

export default class ChartsUi extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.charts" match={this.props.match} />
            <Separator className="mb-5" />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.line" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <LineChart shadow data={lineChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <LineChart data={lineChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.polar" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PolarAreaChart shadow data={polarAreaChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PolarAreaChart data={polarAreaChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.area" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <AreaChart shadow data={areaChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <AreaChart data={areaChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.scatter" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ScatterChart shadow data={scatterChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ScatterChart data={scatterChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.bar" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <BarChart shadow data={barChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <BarChart data={barChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.radar" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <RadarChart shadow data={radarChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <RadarChart data={radarChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.pie" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PieChart shadow data={pieChartData} />
                    </div>
                  </Col>

                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PieChart data={pieChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.doughnut" />
                </CardTitle>
                <Row>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <DoughnutChart shadow data={doughnutChartData} />
                    </div>
                  </Col>
                  <Col xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <DoughnutChart data={doughnutChartData} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
