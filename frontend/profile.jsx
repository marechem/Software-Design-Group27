import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

import states from "./states.json"
const stateOptions = Object.keys(states).map(state => <option key={state} >{state}</option>)

const ProfilePage = () => {
    return(
        <Container className="mt-5 pt-5">
          <Card>
              <Card.Body>
                  <div className="m-4">
                        <Form>
                        <Form.Group controlId="formGridFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" maxLength="50" placeholder="John Doe" required/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control maxLength="100" placeholder="1234 Main St" required/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control maxLength="100" placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control maxLength="100" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" required>
                                {stateOptions}
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="number" minLength="5" maxLength="9" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div>
               </Card.Body>
           </Card>
       </Container>
    );
};
export default ProfilePage

