import Page from "../Page/Page";
import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const OutdoorPool = (props) => {
    let {pool} = props;
    let {title, address, phone} = pool;
    return(
        <React.Fragment>
            <Card style={{ marginTop: "2%", minWidth: 200 }}>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{phone}</CardSubtitle>
                    <CardText>{address}</CardText>
                </CardBody>       
                <CardBody>
                <Button href="#" style={{marginRight: "2%"}}>View Schedule</Button>
                <Button href="#">Book Camp</Button>
                    </CardBody>      
            </Card>
        </React.Fragment>
    );
};
export default OutdoorPool;