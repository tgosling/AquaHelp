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
            <FormGroup>
                <Label for="campName">Camp Name:</Label>
                <Col sm={10}>
                    <Input type="textarea" name="campName" id="campID" placeholder="Enter Camp Name..."/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Label for="pools">Pool:</Label>
                <Input type="select" name="selectPool" id="selectedPool">
                    <option>Canada Games Aquatic Centre</option>
                    <option>Carling Heights Optimist Community Center</option>
                    <option>South London Community Pool</option>
                </Input> 
            </FormGroup>
                {/*React datepicker*/}
            <FormGroup>
                <Label for="campers">Number of Campers:</Label>
                <Input type="textArea" name="numCampers" id="campers"/>
            </FormGroup>
            <FormGroup>
                <Label for="campers">Number of Councillors:</Label>
                <Input type="textArea" name="numCampers" id="campers"/>
                <FormText color="muted">
                    Remember, there is a 1:8 counsellor to camper ratio for swimming.
                </FormText>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </Page>
    );
}//end BookingForm

export default BookingForm;