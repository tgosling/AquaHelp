import Page from "../Page/Page";
import IndoorPools from "./IndoorPools";
import OutdoorPools from "./OutdoorPools";
import React, { Component } from "react";
import {Jumbotron, Card} from "reactstrap";

class Pools extends Component{
    constructor(props){
        super(props);
        //Inquire on how to use pools: and selectedPool 
        //to populate data and handle user input
        this.state = {
            pools: [],
            selectedPool: undefined
        };
    }

    render(){
        return(
            <Page>
                <Jumbotron>
                    <h3>City of London Pools</h3>
                    <p className="lead">This page displays City of london pools.
                         Also notifies for closures               
                    </p>
                </Jumbotron>
                <Card>
                    <IndoorPools/>
                </Card>
                <Card style={{marginTop: "2%"}}>
                    <OutdoorPools/>
                </Card>
            </Page>
        );
    }

}//end Pools

export default Pools;