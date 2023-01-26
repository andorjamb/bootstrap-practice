import React from 'react';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>

            <form>
                <label forHtml="name"></label>
                <input type="text" className="form-control" place-holder="your name" id="name"></input>
                <label forHtml="email"></label>
                <input type="email" className="form-control" placeholder="your email"></input>
                <label forHtml="" className="form-check-label"></label>
                <input type="checkbox" className="form-check-input"></input>


            </form>

        </div>
    );
};

export default Contact;