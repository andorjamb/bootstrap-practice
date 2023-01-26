import React from 'react';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <div className="container">
            <h2>Home</h2>
            <img src="../../public/assets/images/logo.png" alt="logo" height="300px" />
            <Image src="/public/assets/images/cat.jpg" alt="cat"></Image>
            <img src="../../public/assets/images/cat.jpg" alt="cat" />

        </div>
    );
};

export default Home;