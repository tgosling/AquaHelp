import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



class ScheduleModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal isOpen={this.props.open} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    Pool Schedule
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ScheduleModal;