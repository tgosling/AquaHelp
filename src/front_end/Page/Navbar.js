import React, { useState } from "react";
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const items = [
  {
    name: "Home",
    path: "/",
    dropdown: false
    //image: "/img/img.png"
  },
  {
    name: "Pools",
    path: "/Pools"
    //image: "/img/img.png"
  }
];

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BootstrapNavbar color="dark" dark expand="md">
      <NavbarBrand href="/">City of London Aquatics</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pools">Pools</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  );
}; //end Navbar

export const navItems = items;
export default Navbar;
