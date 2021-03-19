import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Container } from "react-bootstrap";


export default class UserLogin extends Component {
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

        axios.post('http://localhost:5000/', userData)
            .then(res => console.log(res.data));

        window.location = '/newForm';
    }

    render() {
        return(
            <Container className="mt-5 pt-5">
                <Card>
                    <Card.Body>
                    <div className="m-4">
                        <form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" 
                                required
                                onChange={this.onChangeUsername}
                                value={this.state.username}
                            />
                            <Form.Text className="text-muted">
                            Please enter your unique username.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                required
                                onChange={this.onChangePassword}
                                value={this.state.password}
                            />
                        </Form.Group>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </div>
                        </form>
                        <div>
                        <span><a href="/register">Register Account</a></span>
                        </div>
                        
                    </div>
                    
                    </Card.Body>
                </Card>
                </Container>
        )
    }
}