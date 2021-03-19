import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Card, Container } from "react-bootstrap";

const RegisterPage = () => {
    return (
        <Container className="mt-5 pt-5">
          <Card>
              <Card.Body>
                  <div className="m-4">
                      <Form>
                          <Form.Group controlId="formGroupUsername">
                              <Form.Label>Create New Username</Form.Label>
                              <Form.Control type="username" placeholder="Enter username" required/>
                            </Form.Group>
                          <Form.Group controlId="formGroupPassword">
                             <Form.Label>Create New Password</Form.Label>
                             <Form.Control type="password" placeholder="Enter Password" required/>
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

export default RegisterPage