import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

export default class TopNavbar extends Component {
    render() {
        return (
            <Container fluid="true"> 
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Fuel Quote App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <NavDropdown title="Fuel Quote" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/newForm">Start a New Form</NavDropdown.Item>
                        <NavDropdown.Item href="/quoteHistory">Fuel Quote History</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}