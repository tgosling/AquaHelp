import React, { useState } from "react";
import Page from "../Page/Page";
import {
 Table,
 Progress,
 Button
} from "reactstrap";

const CampAvail = (props) => {
    return(
        <Page>
            <h1>Pool Availablilty</h1>
            <div/>
            <Table striped>
                <thead>
                    <tr>
                        <th>Pool</th>
                        <th>Availability</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" width="30%">Canada Games Aquatic Center</th>
                            <td><Progress value="25">25%</Progress></td>
                            <td><Button>Book Camp</Button></td>
                        </tr>
                    </tbody>
               
            </Table>
        </Page>
    );
}//end CampAvail

export default CampAvail;