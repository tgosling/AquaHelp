import React from 'react';
import Page from '../Page/Page';
import {
    Button, Form, FormGroup, FormText,
    Label, Input, Jumbotron, Col, Option
} from 'reactstrap';

const BookingForm = (props) => {
    return (
        <Page>
        <Jumbotron>
            <h2>Camp Booking Form</h2>
        </Jumbotron>
        <Form>
            <FormGroup row>
                <Label for="campName" sm={2}>Camp Name:</Label>
                <Col sm={10}>
                    <Input type="" name="camp" id="campName" placeholder="Enter Camp Name..."/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="councName" sm={2}>Councillor Name:</Label>
                <Col sm={10}>
                    <Input type="" name="councillor" id="councName" placeholder="Enter Councillor Name..."/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="campPhone" sm={2}>Phone #:</Label>
                <Col sm={10}>
                    <Input type="number" name="campNum" id="campPhone" placeholder="Enter Camp Contact Number..."/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="pools" sm={2}>Pool:</Label>
                <Col sm={10}>
                <Input type="select" name="selectPool" id="selectedPool">
                    <option>Canada Games Aquatic Centre</option>
                    <option>Carling Heights Optimist Community Center</option>
                    <option>South London Community Pool</option>
                </Input> 
                </Col>
            </FormGroup>
                {/*React 
                   datepicker
                   goes here*/}
            <FormGroup row>
                <Label for="campers" sm={2}>Number of Campers:</Label>
                <Col sm={10}>
                    <Input  name="numCampers" id="campers"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="campers" sm={2}>Number of Councillors:</Label>
                <Col sm={10}>
                <Input name="numCampers" id="campers"/>
                <FormText color="muted">
                    Remember, there is a 1:8 counsellor to camper ratio for swimming.
                </FormText>
                </Col>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </Page>
    );
}//end BookingForm

export default BookingForm;