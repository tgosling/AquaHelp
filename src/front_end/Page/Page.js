import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


class ModuleLoader extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <Container style={{ marginBottom: 25, marginTop: 10 }} fluid={this.props.fluid}>
                 {this.props.children}
                </Container>
            </React.Fragment>
        )
    }
}//end ModuleLoader

export default ModuleLoader;