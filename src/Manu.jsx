import React from "react";
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import GOT from './Webseries/GOT';

const Manu = () =>{
    return(
        <>
        <Navbar bg="success" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">Movies Drive</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        
        <NavDropdown title="Netflix" id="basic-nav-dropdown">
          <NavDropdown.Item href="/lucifer">Lucifer</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="HBO" id="basic-nav-dropdown">
          <NavDropdown.Item href="/got">Game of Thrones</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Disney+" id="basic-nav-dropdown">
          <NavDropdown.Item href="/whatif">What If...?</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Marvel" Variant="dark" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ant Man</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Avenges</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Black Panther</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Black widow</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Captain America</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Captain Marvel</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Doctor Strange</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Guardians of the Galaxy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hulk</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Iron man</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Spider man</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Thor</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Manu;