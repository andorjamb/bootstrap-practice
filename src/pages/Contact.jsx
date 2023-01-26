import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

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
            message: "",
            canContact: false
        })

    }

    return (
        <div>
            <h2>Contact</h2>
            <Form onChange={(e) => handleChange(e)}>
                <FormGroup>
                    <FormLabel htmlFor="first_name"></FormLabel>
                    <FormControl type="text" className="form-control" aria-label="Name" placeholder="Your name" controlId="first_name"></FormControl>
                    <FormLabel htmlFor="email"></FormLabel>
                    <FormControl aria-label="email" type="email" className="form-control" controlId="email" placeholder="Your email"></FormControl>
                    <FormLabel htmlFor="canContact" ></FormLabel>
                    <FormControl type="checkbox" className="form-check-input" controlId="canContact"></FormControl>
                    <FormLabel htmlFor="message"></FormLabel>
                    <FormControl as="textarea" area-label="Message" name="message" placeholder="Message"></FormControl>
                    <button type="submit" onSubmit={(e) => handleSubmit(e)}>Submit</button>
                </FormGroup>
            </Form>

        </div >
    );
};

export default Contact;