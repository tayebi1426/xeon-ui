import React from "react";
import { Row, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Col } from "../../components/common/CustomBootstrap";
import IconCard from "../../components/cards/IconCard";

import data from "../../data/iconCards";

const IconCards = () => {
  return (
    <Row>
      <Col xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="cards.icon-card" />
        </CardTitle>
        <Row className="icon-cards-row mb-2">
          {data.map((item, index) => {
            return (
              <Col xxs="6" sm="4" md="3" lg="2" key={`icon_card_${index}`}>
                <IconCard {...item} className="mb-4" />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default IconCards;
