import { Container, Nav, Navbar } from "react-bootstrap";

export const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Tom's Cv</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">About me</Nav.Link>
        <Nav.Link href="#features">Projects</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};
