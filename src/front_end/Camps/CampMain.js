import React, { useState } from "react";
import Page from "../Page/Page";
import {
  Card,
  CardBody,
  CardText,
  CardDeck,
  CardTitle,
  Jumbotron,
  Button,
  Col,
  Row
} from "reactstrap";

const CampMain = props => {
  return (
    <Page>
      <Jumbotron>
        <h1>Camp Bookings</h1>
        <p>Camps rules go here</p>
      </Jumbotron>
      <CardDeck>
        <Row>
          <Card>
            <Col sm="6">
              <CardBody>
                <CardTitle>Book a Camp</CardTitle>
                <CardText>Register day camp for a recreational swim</CardText>
                <Button>Book Camp</Button>
              </CardBody>
            </Col>
          </Card>
          <Card>
            <Col sm="6">
            <CardBody>
                <CardTitle>Pool Availability</CardTitle>
                <CardText>Check recreational swim booking availability across all City of London Pools</CardText>
                <Button>Check Availability</Button>
              </CardBody>
            </Col>          
          </Card>
        </Row>
      </CardDeck>
    </Page>
  );
}; //end CampMain

export default CampMain;
