import React from "react";
import {
  CardText,
  Row,
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Col } from "../../components/common/CustomBootstrap";
const ImageOverlayCard = () => {
  return (
    <Row>
      <Col xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="cards.image-overlay-card" />
        </CardTitle>
        <Row>
          <Col xxs="12" xs="6" lg="3">
            <Card inverse className="mb-4">
              <CardImg
                src="/assets/img/card-thumb-1.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Fruitcake</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default ImageOverlayCard;
