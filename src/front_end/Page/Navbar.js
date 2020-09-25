import React, { useState } from "react";
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import {routes} from '../../App'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BootstrapNavbar color="info" dark expand="md">
      <NavbarBrand href="/">City of London Aquatics</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {routes.map((route) => (
            <NavItem key={route.path}>
              <NavLink tag={Link} to={route.path}>
                {route.text}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <NavLink href="https://github.com/tgosling/AquaHelp">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  );
}; //end Navbar

export default Navbar;
