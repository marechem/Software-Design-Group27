import React, { Component } from 'react';
import { Form, Container } from "react-bootstrap";

export default class NewFuelQuote extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Container>
        )
    } 
}