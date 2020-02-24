import Page from "../Page/Page";
import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const OutdoorPool = (props) => {
    let {pool} = props;
    let {title, address, phone, photo} = pool;
    return(
        <React.Fragment>
            <Card style={{ marginTop: "2%", minWidth: 300 }}>
            <CardImg top width="100%" src={photo} alt={title}/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{phone}</CardSubtitle>
                    
                    <CardText>{address}</CardText>
                </CardBody>       
                <CardBody>
                <Button href="#" style={{marginRight: "2%", marginTop: "1%"}}>View Schedule</Button>
                <Button href="#" style={{marginTop: "1%"}}>Book Camp</Button>
                    </CardBody>      
            </Card>
        </React.Fragment>
    );
};
export default OutdoorPool;