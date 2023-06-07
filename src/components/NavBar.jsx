import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, MY_LINKS_ROUTE, PERFIL_ROUTE } from "../routes/Routes";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
export function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => goTo(HOME_ROUTE)}>LinkTree</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => goTo(MY_LINKS_ROUTE)}>Meus Links</Nav.Link>
          <Nav.Link onClick={() => goTo(PERFIL_ROUTE)}>Perfil</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            onClick={() => {
              dispatch(logout())
            }}
          >
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
