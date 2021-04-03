import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    } 

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/newForm");
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

        this.props.registerUser(userData, this.props.history);

        console.log(`Success: ${userData}`);

        axios.post('http://localhost:5000/register', userData)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        const { errors } = this.state;
        return (
            <Container className="mt-5 pt-5">
              <Card>
                  <Card.Body>
                      <div className="m-4">
                          <Form onSubmit={this.onSubmit}>
                              <Form.Group controlId="formGroupUsername">
                                  <Form.Label>Create New Username</Form.Label>
                                  <Form.Control type="username" placeholder="Enter username" required
                                    onChange={this.onChangeUsername}
                                    value={this.state.username}
                                    errors={errors.username}
                                    className={classnames("", {
                                        invalid: errors.username
                                    })}
                                  />
                                  <span className="red-text">{errors.username}</span>
                                </Form.Group>
                              <Form.Group controlId="formGroupPassword">
                                 <Form.Label>Create New Password</Form.Label>
                                 <Form.Control type="password" placeholder="Enter Password" 
                                    required
                                    onChange={this.onChangePassword}
                                    value={this.state.password}
                                    errors={errors.password}
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                  />
                                  <span className="red-text">{errors.password}</span>
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

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(RegisterPage));