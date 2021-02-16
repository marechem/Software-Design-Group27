import React, { Component } from 'react';
import { Form, Container, Col, Button, Card } from "react-bootstrap";

export default class NewFuelQuote extends Component {
    render() {
        return (
            <Container className="mt-5 mb-5 pt-5">
                <Card>
                  <Card.Body>
                    <Container>
                        <Form>
                            <Form.Row>
                            <Col xs={7}>
                                <Form.Label>Enter the amount of Gallons needed.</Form.Label>
                                <Form.Control type="text" placeholder="Gallons requested" />
                            </Col>
                            <Col>
                                <Form.Label>Delivery Date</Form.Label>
                                <Form.Control type="date" />
                            </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Delivery Address will be taken from your profile.</Form.Label>
                                    <Form.Control type="text" placeholder="Address"/>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <div>
                                        <br />
                                        <p>Suggested price is currently pending.</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <br />
                                        <p>Total Amount feature is currently pending.</p>
                                    </div>
                                </Col>
                            </Form.Row>
                            <div style={{display: 'flex', justifyContent:'center'}}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Container>
                  </Card.Body>
                </Card>
            </Container>
        )
    } 
}