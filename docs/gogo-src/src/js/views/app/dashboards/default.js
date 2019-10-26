import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row } from "reactstrap";
import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import Logs from "../../../containers/dashboards/Logs";
import Tickets from "../../../containers/dashboards/Tickets";
import Calendar from "../../../containers/dashboards/Calendar";
import BestSellers from "../../../containers/dashboards/BestSellers";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import GradientCardContainer from "../../../containers/dashboards/GradientCardContainer";
import Cakes from "../../../containers/dashboards/Cakes";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import TopRatedItems from "../../../containers/dashboards/TopRatedItems";

class DefaultDashboard extends Component {
  render() {
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.default" match={this.props.match}/>
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row>
          <Col lg="12" xl="6">
            <IconCardsCarousel/>
            <Row>
              <Col md="12" className="mb-4">
                <SalesChartCard/>
              </Col>
            </Row>
          </Col>
          <Col lg="12" xl="6" className="mb-4">
            <RecentOrders/>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="12" className="mb-4">
           <ProductCategoriesPolarArea chartClass="dashboard-donut-chart"/>
          </Col>
          <Col lg="4" md="6" className="mb-4">
           <Logs/>
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <Tickets/>
          </Col>
        </Row>
        <Row>
          <Col xl="6" lg="12" className="mb-4">
            <Calendar/>
          </Col>
          <Col xl="6" lg="12" className="mb-4">
            <BestSellers/>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="4" className="mb-4">
           <ProfileStatuses/>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <GradientCardContainer/>
          </Col>
          <Col md="6" lg="4" className="mb-4">
           <Cakes/>
          </Col>
        </Row>
        <SortableStaticticsRow messages={messages}/>
        <Row>
          <Col sm="12" md="6" className="mb-4">
            <WebsiteVisitsChartCard/>
          </Col>
          <Col sm="12" md="6" className="mb-4">
            <ConversionRatesChartCard/>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="6" xl="4">
            <Row>
              <Col lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-clock"
                  title = {`5 ${messages["dashboards.files"]}`}
                  detail = {messages["dashboards.pending-for-print"]}
                  percent = {5*100/12}
                  progressText = "5/12"
                />
              </Col>
              <Col lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-male"
                  title = {`4 ${messages["dashboards.orders"]}`}
                  detail = {messages["dashboards.on-approval-process"]}
                  percent = {4*100/6}
                  progressText = "4/6"
                />
              </Col>
              <Col lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-bell"
                  title = {`8 ${messages["dashboards.alerts"]}`}
                  detail = {messages["dashboards.waiting-for-notice"]}
                  percent = {8*100/10}
                  progressText = "8/10"
                />
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" xl="4" sm="12" className="mb-4">
           <AdvancedSearch messages={messages}/>
          </Col>
          <Col lg="6" xl="4" className="mb-4">
            <SmallLineCharts/>
            <TopRatedItems/>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(DefaultDashboard);