import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";
import { Col, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import QuickPost from "../../../containers/dashboards/QuickPost";
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import NewComments from "../../../containers/dashboards/NewComments";

class ContentDashboard extends Component {
  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Col xxs="12">
            <Breadcrumb heading="menu.content" match={this.props.match} />
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row>
          <Col lg="12" xl="6">
            <IconCardsCarousel />
            <Row>
              <Col md="12" className="mb-4">
                <QuickPost/>
              </Col>
            </Row>
          </Col>
          <Col lg="12" xl="6" className="mb-4">
            <BestSellers title="dashboards.top-viewed-posts" />
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="4" className="mb-4">
            <Cakes />
          </Col>
          <Col md="6" lg="8" className="mb-4">
            <NewComments/>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6" className="mb-4">
            <WebsiteVisitsChartCard />
          </Col>
          <Col sm="12" md="6" className="mb-4">
            <ConversionRatesChartCard />
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <GradientWithRadialProgressCard
              icon="iconsminds-clock"
              title={`5 ${messages["dashboards.posts"]}`}
              detail={messages["dashboards.pending-for-publish"]}
              percent={(5 * 100) / 12}
              progressText="5/12"
            />
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <GradientWithRadialProgressCard
              icon="iconsminds-male"
              title={`4 ${messages["dashboards.users"]}`}
              detail={messages["dashboards.on-approval-process"]}
              percent={(4 * 100) / 6}
              progressText="4/6"
            />
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <GradientWithRadialProgressCard
              icon="iconsminds-bell"
              title={`8 ${messages["dashboards.alerts"]}`}
              detail={messages["dashboards.waiting-for-notice"]}
              percent={(8 * 100) / 10}
              progressText="8/10"
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(ContentDashboard);