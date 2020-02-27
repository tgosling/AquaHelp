import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import classnames from "classnames";

const MapModal = props => {
  return (
    <Modal
      isOpen={props.open}
      toggle={props.toggle}
      className={props.className}
      width="600"
    >
      <ModalHeader toggle={props.mapToggle}>{props.title}</ModalHeader>
      <div id="mapBox">
        <div class="SMheaderBox">
          <h2>Map of C.G.A.C.</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5835.788144877939!2d-81.302759!3d43.001565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa6cd4c8a7daf069!2sCanada+Games+Aquatic+Centre!5e0!3m2!1sen!2sca!4v1491925619266"
          width="600"
          height="300"
         
          allowfullscreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default MapModal;
