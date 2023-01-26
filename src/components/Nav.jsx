import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img src="../assets/images/logoGreen.svg" alt="A-swirl" />
                </Navbar.Brand>
            </Container>

        </Navbar>
    );
};

export default Nav;