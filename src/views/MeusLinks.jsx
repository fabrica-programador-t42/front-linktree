import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../styles/style.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { buscarLinksPorId } from "./../services/LinkService";
import Form from "react-bootstrap/Form";
import { LINKS } from "./../data/Links";
import Image from "react-bootstrap/Image";

export function MeusLinks() {
  const [links, setLinks] = useState([]);
  const [show, setShow] = useState(false);
  const [editLink, setEditLink] = useState({
    tipo: null,
  });

  const getLabel = (tipo) => {
    const item = LINKS.find((l) => l.tipo === tipo);
    return item.label;
  };

  const getImagem = (tipo = null) => {
    const item = LINKS.find((l) => l.tipo === tipo);
    return item.imagem;
  };

  const handleClose = () => {
    setEditLink({ tipo: null });
    setShow(false);
  };
  const handleShow = (data) => {
    setEditLink(data);
    setShow(true);
  };

  useEffect(() => {
    buscarLinksPorId("6438a0f9b616d2ec7911a0aa").then((response) => {
      setLinks(response);
    });
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
        
            <Col xs={12} style={{textAlign: 'end'}}>
                <Button variant="success" onClick={() => handleShow({})}>Novo Link</Button>
            </Col>
          {links?.map((link) => (
            <Col xs={12} md={6} className="my-3">
              <Card className="card-clicavel" onClick={() => handleShow(link)}>
                <Card.Body>
                  <Row>
                    <Col xs={10}>
                        <Card.Text>{link.nome}</Card.Text>
                    </Col>
                    <Col xs={2}>
                      <Image
                        width={50}
                        height={50}
                        src={getImagem(link.tipo)}
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editLink.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tipo</Form.Label>
              <Form.Select aria-label="Default select example">
                {editLink.tipo ? (
                  <option value={editLink.tipo}>
                    {getLabel(editLink.tipo)}
                  </option>
                ) : (
                  <></>
                )}
                {LINKS.filter((l) => l.tipo !== editLink.tipo).map((link) => (
                  <option value={link.tipo}>{link.label}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nome Exibido</Form.Label>
              <Form.Control type="text" value={editLink.nome} />
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" value={editLink.url} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
