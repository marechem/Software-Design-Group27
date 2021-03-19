import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Container } from "react-bootstrap";

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    } 

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(`Success: ${userData}`);

        axios.post('http://localhost:5000/register', userData)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    render() {
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
        )
    }
}