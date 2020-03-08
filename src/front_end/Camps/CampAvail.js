import React, { useState } from "react";
import Page from "../Page/Page";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Table,
  Progress,
  Button,
  InputGroup,
  InputGroupAddon,
  Jumbotron
} from "reactstrap";

const CampAvail = props => {
  const [startDate, setStartDate] = useState(null);
  return (
    <Page>
      <Jumbotron>
        <h1>Pool Availablilty</h1>
        <div />
        <InputGroup>
          <InputGroupAddon>Select a Date:</InputGroupAddon>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
            placeholderText="Check date"
            style={{margin: "2%"}}
          />
        </InputGroup>
      </Jumbotron>
      <Table striped>
        <thead>
          <tr>
            <th>Pool</th>
            <th>Availability</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" width="20%">
              Canada Games Aquatic Center
            </th>
            <td width="35%">
              <Progress value="70" style={{ height:"25px" }}>
                70%
              </Progress>
            </td>
            <td width="10%" height="100%">
              <Button>Book</Button>
            </td>
          </tr>
          <tr>
            <th scope="row" width="20%">
              Carling Heights 
            </th>
            <td width="35%">
              <Progress value="25" style={{ height:"25px" }}>
                25%
              </Progress>
            </td>
            <td width="10%" height="100%">
              <Button>Book</Button>
            </td>
          </tr>
          <tr>
            <th scope="row" width="20%">
              South London Community Pool
            </th>
            <td width="35%">
              <Progress value="55" style={{ height:"25px" }}>
                55%
              </Progress>
            </td>
            <td width="10%" height="100%">
              <Button>Book</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Page>
  );
}; //end CampAvail

export default CampAvail;
