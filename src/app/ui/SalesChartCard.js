import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import {I18Massage} from "../../core/components/common";
import {LineChart} from "../../core/components/charts"

import { lineChartData } from "../../core/data/charts";

const SalesChartCard = () => {
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <UncontrolledDropdown>
          <DropdownToggle color="" className="btn btn-header-light icon-button">
            <i className="simple-icon-refresh" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <I18Massage code="dashboards.sales" />
            </DropdownItem>
            <DropdownItem>
              <I18Massage code="dashboards.orders" />
            </DropdownItem>
            <DropdownItem>
              <I18Massage code="dashboards.refunds" />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardBody>
        <CardTitle>
          <I18Massage code="dashboards.sales" />
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesChartCard;
