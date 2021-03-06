import React from 'react';
import {Link} from 'react-router-dom';
import {Container,
  Navbar,
  NavDropdown,
  Form,
  Nav} from 'react-bootstrap';

function NavB() {
  return (
    <Container fluid="lg" className="p-0">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Nav className="mr-auto">
            <Link to="/Login">
              <Nav.Link href="#link">Log-in</Nav.Link>
              </Link>
              <Link to="/Register">
              <Nav.Link href="#link">Register</Nav.Link>
              </Link>
            </Nav>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
  </Container>  
  );
}

export default NavB;
