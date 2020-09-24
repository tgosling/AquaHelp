import Page from "../Page/Page";
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardDeck,
  CardTitle,
  Jumbotron,
  Button
} from "reactstrap";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Jumbotron>
          <h1 className="display-3" style={{color: "blue"}}>AquaHelp</h1>
          <p className="lead">
            Welcome to AqauHelp, this is a tool to help City of London Aquatics
            Staff. This site displays pool schedules and aids with camp
            bookings.
          </p>
        </Jumbotron>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>Book a Camp</CardTitle>
              <CardText>Register day camp for a recreational swim</CardText>
              <Button>Book Camp</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Pool Availability</CardTitle>
              <CardText>
                Check recreational swim booking availability across all City of
                London Pools
              </CardText>
              <Button>Check Availability</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Swimmming Schedules</CardTitle>
              <CardText>View Swimming Schedule for facilities</CardText>
              <Button>View Rec Swim</Button>
              <Button>View Lane Swim</Button>
              <Button>View Aquafit</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </Page>
    );
  }
} //end Home

export default Home;
