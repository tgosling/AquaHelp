import React, { useState } from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ScheduleModal from "../Modals/ScheduleModal";

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
                <Button href="#" onClick={toggle} style={{marginRight: "2%"}}>View Schedule</Button>
                <ScheduleModal title={title} open={modal} toggle={toggle}></ScheduleModal>
                <Button href="#">Book Camp</Button>
                    </CardBody>      
            </Card>
        </React.Fragment>
    );
};
export default IndoorPool;