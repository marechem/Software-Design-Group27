import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container className="mt-5 pt-5">
      <Card>
        <Card.Body>
          <div className="m-4">
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
                <Form.Text className="text-muted">
                  Please enter your unique username.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

export default LoginPage
