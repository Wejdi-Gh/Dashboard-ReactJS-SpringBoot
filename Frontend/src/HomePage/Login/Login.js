import React, { Component } from 'react'
import {Form , Button} from 'react-bootstrap'
import './Login.css'
export default class Login extends Component {
    render() {
        return (
            <Form className="login-form">
                <div className="input-container">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="outline-success" className="login-button" size="lg" type="submit">
                    Login
                </Button>
                </div>
            </Form>
        )
    }
}
