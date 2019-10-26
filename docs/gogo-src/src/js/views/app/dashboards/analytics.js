import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row } from "reactstrap";

import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import OrderStockRadarChart from "../../../containers/dashboards/OrderStockRadarChart";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";

class DashboardAnalytics extends Component {
  render() {
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.analytics" match={this.props.match}/>
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6" className="mb-4">
            <WebsiteVisitsChartCard/>
          </Col>
          <Col sm="12" md="6" className="mb-4">
            <ConversionRatesChartCard/>
          </Col>
        </Row>

        <Row>
          <Col xl="4" lg="6" md="12" className="mb-4">
           <ProductCategoriesDoughnut/>
          </Col>
          <Col xl="4" lg="6" md="12" className="mb-4">
           <ProfileStatuses cardClass="dashboard-progress"/>
          </Col>
          <Col xl="4" lg="12" md="12">
           <SmallLineCharts itemClass="dashboard-small-chart-analytics"/>
          </Col>
        </Row>

        <SortableStaticticsRow messages={messages}/>

        <Row>
          <Col xxs="12" lg="6" className="mb-4">
            <OrderStockRadarChart/>
          </Col>
          <Col xxs="12" lg="6" className="mb-4">
            <ProductCategoriesPolarArea/>
          </Col>
        </Row>
        
        <Row>
          <Col xxs="12" className="mb-4">
            <SalesChartCard/>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(DashboardAnalytics);