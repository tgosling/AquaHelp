import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';

const ScheduleModal = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
      <Modal
        isOpen={props.open}
        toggle={props.toggle}
        className={props.className}
      >
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({active: activeTab === '1'})}
                     onClick={() =>{toggle('1');}}>Rec Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: activeTab === '2'})}
                     onClick={() =>{toggle('2');}}>Lane Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: activeTab === '3'})}
                     onClick={() =>{toggle('3');}}>Aquafit</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <ModalBody>Rec Swim Schedule</ModalBody>
            </TabPane>
            <TabPane tabId="2">
                <ModalBody>Lane Swim Schedule</ModalBody>
            </TabPane>
            <TabPane tabId="3">
                <ModalBody>Aquafit Schedule</ModalBody>
            </TabPane>            
        </TabContent>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
}

export default ScheduleModal;