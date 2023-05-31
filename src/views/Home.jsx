/* eslint-disable no-restricted-globals */
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { useState } from "react";

export function Home() {
  const [show, setShow] = useState(false);
  const goTo = () => {
    location.href = 'https://react-bootstrap.netlify.app/docs/components/modal#sizing-modals-using-custom-css'
  }
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} className="my-3">
            <Card onClick={() => setShow(true)}>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="my-3">
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="my-3">
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="my-3">
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show}  onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row>
          <Col xs={12}  className="my-1">
            <Card onClick={() => goTo()}>
            
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col xs={12}  className="my-1">
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
