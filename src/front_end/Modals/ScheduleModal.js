import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Nav, NavLink, NavItem, TabContent, 
    TabPane, Table } from "reactstrap";
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
                     onClick={() =>{toggle('1');}}>Lane Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: activeTab === '2'})}
                     onClick={() =>{toggle('2');}}>Rec Swim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: activeTab === '3'})}
                     onClick={() =>{toggle('3');}}>Aquafit</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <ModalBody>Lane Swim Schedule</ModalBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Morning</th>
                                <th>Day</th>
                                <th>Evening</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Monday</th>
                                <td>7:15-10:00am</td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Tuesday</th>
                                <td>7:15-10:00am</td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Wednesday</th>
                                <td>7:15-10:00am</td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Thursday</th>
                                <td>7:15-10:00am</td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Friday</th>
                                <td>7:15-10:00am</td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Saturday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Sunday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
            </TabPane>
            <TabPane tabId="2">
                <ModalBody>Rec Swim Schedule</ModalBody>
                <Table striped>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Morning</th>
                                <th>Day</th>
                                <th>Evening</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Monday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Tuesday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Wednesday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Thursday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Friday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Saturday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td>7:15-10:00pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Sunday</th>
                                <td></td>
                                <td>12:00-3:00pm</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
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