import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>
                    <Image className="fluid" src="../assets/images/logoGreen.svg"></Image>
                    <img src="../assets/images/logoGreen.svg" alt="logo" />
                </Navbar.Brand></LinkContainer>
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