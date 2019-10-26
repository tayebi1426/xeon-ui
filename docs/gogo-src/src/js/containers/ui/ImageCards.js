import React from "react";
import { CardText, CardSubtitle, Row, Card, CardBody, CardTitle,CardImg,Badge } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Col } from "../../components/common/CustomBootstrap";

const ImageCards = () => {
  return (
    <Row>
    <Col xxs="12">
      <CardTitle className="mb-4"><IntlMessages id="cards.image-card" /></CardTitle>
      <Row>
        <Col xxs="12" xs="6" lg="4">
          <Card className="mb-4">
            <div className="position-relative">
              <CardImg top src="/assets/img/card-thumb-1.jpg" alt="Card image cap" />
              <Badge color="primary" pill className="position-absolute badge-top-left">NEW</Badge>
              <Badge color="secondary" pill className="position-absolute badge-top-left-2">TRENDING</Badge>
            </div>
            <CardBody>
              <CardSubtitle className="mb-4">Homemade Cheesecake with Fresh Berries and Mint</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">09.04.2018</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xxs="12" xs="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardSubtitle className="mb-4">Homemade Cheesecake with Fresh Berries and Mint</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">09.04.2018</CardText>
            </CardBody>
            <div className="position-relative">
              <CardImg bottom src="/assets/img/card-thumb-1.jpg" alt="Card image cap" />
              <Badge color="primary" pill className="position-absolute badge-top-left">NEW</Badge>
              <Badge color="secondary" pill className="position-absolute badge-top-left-2">TRENDING</Badge>
            </div>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
  )
}

export default ImageCards
