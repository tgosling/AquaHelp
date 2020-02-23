import React, {Component, useState} from "react";
import Page from "./front_end/Page/Page";
import{
  Jumbotron,
} from "reactstrap";

function App() {
  return (
    <Page fluid="false">
                <Jumbotron>
                    <h1 className="display-3">Aquahelp</h1>
                    <p className="lead">
                        Welcome to Aqauhelp, this is a tool to help City of London Aquatics Staff.
                        This site displays pool schedules and aids with camp bookings.
                    </p>
                </Jumbotron>
            </Page>
  );
}

export default App;
