import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ScheduleModal from "../Modals/ScheduleModal";
import MapModal from "../Modals/MapModal";
import "./IndoorPool.css";

const IndoorPool = (props) => {

    let {pool} = props;
    let {title, phone, address, photo} = pool;
   
    const [modal, setModal] = useState(false);
   
     const toggle = () => setModal(!modal);
   

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
                <Button onClick={toggle}>View Schedule</Button>
                <ScheduleModal title={title} open={modal} toggle={toggle}/>
                <Button >Book Camp</Button>
                <Button onClick={toggle}>View on Map</Button>              
                    </CardBody>      
            </Card>
        </React.Fragment>
    );
};
export default IndoorPool;