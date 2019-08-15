import React from 'react';
import {Modal, Button} from 'react-bootstrap';

function Instructions(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How to Play
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Click any card more than once and you lose. Don't forget which ones you've clicked before!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='info' onClick={props.onHide}>Let's Go!</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Instructions;