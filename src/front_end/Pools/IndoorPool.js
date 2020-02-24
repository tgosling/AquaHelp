import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const IndoorPool = (props) => {
    let {pool} = props;
    //let {photo, title, address, schedule, book} = pool;
    let {title, phone, address, photo} = pool;
    return(
        <React.Fragment>
            <Card style={{ marginTop: "2%"}}>
            <CardImg top width="100%" src={photo} alt={title}/>
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
export default IndoorPool;