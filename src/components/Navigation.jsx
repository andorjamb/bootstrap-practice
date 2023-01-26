import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img src="../assets/images/logoGreen.svg" alt="logo" />
                </Navbar.Brand>
            </Container>

            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer to="contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                </Nav></Navbar.Collapse>


        </Navbar>
    );
};

export default Navigation;