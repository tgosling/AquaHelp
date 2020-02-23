import React, {Component} from "react";
import {
    Collapse,
    Navbar as BootstrapNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";

  const items = [
      {name: "Home",
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

  class Navbar extends Component {
      constructor(props){
          super(props);

          this.state ={
              isOpen: false
          };
      }

      toggleNavBar = () =>{
          this.setState({
              isOpen: !this.state.isOpen
          });
      };

      render() {
        return (
          <BootstrapNavbar color="dark" dark expand="md">
              <NavbarBrand href="/">City of London Aquatics</NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/pools">Pools</NavLink>
                    </NavItem>
                  </Nav>
              </Collapse>
          </BootstrapNavbar>
        );
    }
  }//end Navbar

  export const navItems = items;
  export default Navbar;