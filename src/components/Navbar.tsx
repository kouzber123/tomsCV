import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{float:"left", textAlign:"left", marginRight:"20rem"} }>
        <Navbar.Brand >
          <NavLink to={"/"}>Tom's CV</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to={"/profile"}>About me</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
