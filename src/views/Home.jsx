/* eslint-disable no-restricted-globals */
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { buscarTodosOsLinks } from "../services/LinkService";

export function Home() {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState([])
  const [items, setItems] = useState([])

  const goTo = (url) => {
    window.open(url)
  }

  const showLinks = (listLinks) => {
    setLinks(listLinks)
    setShow(true)
  }


  useEffect(() => {
    buscarTodosOsLinks().then((response) => {
      console.log(response);
      setItems(response)
    })
  }, [])

  return (
    <>
      <Container className="mt-5">
        <Row>
          {
            items?.length && items.map((item, idx) => (
              <Col key={idx} xs={12} md={6} className="my-3">
                <Card key={idx} onClick={() => showLinks(item.links)}>
                  <Card.Body>{item.nome}</Card.Body>
                </Card>
              </Col>
            ))
          }

        </Row>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row>
            {
              links?.length && links.map((link, idx) => (
                <Col key={idx} xs={12} className="my-1">
                <Card key={idx} onClick={() => goTo(link.url)}>
                  <Card.Body>{link.nome}</Card.Body>
                </Card>
              </Col>
              ))
            }
           
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
