import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const TopNav = () => (
    <Navbar bg="info" expand="lg">
    <Navbar.Brand href="#home">HRT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto" justify variant="tabs" >
            <Nav.Link href="/hello">Hello</Nav.Link>
            <Nav.Link href="/reverse" >Reverser</Nav.Link>
            <Nav.Link href="/todo">ToDo</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
  