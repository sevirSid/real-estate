import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({header, description}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
          <Container>
            <Row class="justify-content-center">
              <Col>
                <Button  className="button-size" variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Col>
              <Col>
                <Button className="button-size" variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Col>
            </Row>
            </Container>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  
  export default CustomModal;

