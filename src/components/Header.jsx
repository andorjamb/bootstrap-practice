import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="site-header sticky-top">
            <Breadcrumb>
            </Breadcrumb>
            <Nav></Nav>

        </header>
    );
};

export default Header;