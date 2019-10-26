import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import Tickets from "../../../containers/dashboards/Tickets";
import Calendar from "../../../containers/dashboards/Calendar";
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";

class EcommerceDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.ecommerce" match={this.props.match} />
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row>
          <Col lg="12" xl="6">
            <IconCardsCarousel />
            <Row>
              <Col md="12" className="mb-4">
                <SalesChartCard />
              </Col>
            </Row>
          </Col>
          <Col lg="12" xl="6" className="mb-4">
            <RecentOrders />
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="12" className="mb-4">
            <ProductCategoriesDoughnut chartClass="dashboard-donut-chart" />
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <Cakes />
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <Tickets />
          </Col>
        </Row>

        <Row>
          <Col xl="6" lg="12" className="mb-4">
            <Calendar />
          </Col>
          <Col xl="6" lg="12" className="mb-4">
            <BestSellers />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(EcommerceDashboard);
