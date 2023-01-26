import React, { useState } from 'react';
import { Form, InputGroup, Row, Button, FormGroup, FormLabel } from 'react-bootstrap';

const Contact = () => {

    const [form, setForm] = useState({
        first_name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //post data
        setForm({
            ...form,
            first_name: "",
            email: "",
            message: ""
        })

    }

    return (
        <div>
            <h2>Contact</h2>
            <Form onChange={(e) => handleChange(e)}>
                <FormGroup>
                    <FormLabel htmlFor="first_name"></FormLabel>
                    <input type="text" className="form-control" place-holder="your name" id="first_name"></input>
                    <label htmlFor="email"></label>
                    <input type="email" className="form-control" placeholder="your email"></input>
                    <label htmlFor="" className="form-check-label"></label>
                    <input type="checkbox" className="form-check-input"></input>
                    <label htmlFor="message"></label>
                    <textarea name="message"></textarea>
                    <button type="submit" onSubmit={(e) => handleSubmit(e)}></button>
                </FormGroup>

            </Form>

        </div >
    );
};

export default Contact;