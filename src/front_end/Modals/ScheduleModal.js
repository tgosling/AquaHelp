import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Nav, NavLink, NavItem } from "reactstrap";

class ScheduleModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
        <Nav tabs>
          <NavItem>
            <NavLink>Rec Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Lane Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Aquafit</NavLink>
          </NavItem>
        </Nav>
        <ModalBody>Pool Schedule</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ScheduleModal;