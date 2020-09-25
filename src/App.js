import React, { Component, useState } from "react";
import Page from "./front_end/Page/Page";
import { Jumbotron } from "reactstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./front_end/Page/Navbar";
import Home from "./front_end/Home/Home";
import Camps from "./front_end/Camps/CampAvail";
import Pools from "./front_end/Pools/Pools";

export const routes = [
  {
    path: "/",
    text: "Home",
    component: Home,
  },
  {
    path: "/camps",
    text: "Camps",
    component: Camps,
  },
  {
    path: "/pools",
    text: "Pools",
    component: Pools,
  },
];

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar routes={routes} />

      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
