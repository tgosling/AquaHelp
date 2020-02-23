import Page from "../Page/Page";
import React, {Component} from "react";
import{
    Jumbotron,
} from "reactstrap";


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Page fluid="false">
                <Jumbotron>
                    <h1 className="display-3">AquaHelp</h1>
                    <p className="lead">
                        Welcome to AqauHelp, this is a tool to help City of London Aquatics Staff.
                        This site displays pool schedules and aids with camp bookings.
                    </p>
                </Jumbotron>
            </Page>
        )
    }
}//end Home

export default Home;