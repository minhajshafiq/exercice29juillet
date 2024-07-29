import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-auto">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#about">À propos</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="email"
            placeholder="Votre email"
            className="me-2"
          />
          <Button variant="outline-light">S'abonner</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Footer;
