import React, { Component } from 'react'
import {Form , Button} from 'react-bootstrap'
import {signup} from '../../HomePage/Service/UserService'
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default class Signup extends Component {

constructor(props) {
super(props)
this.state={newUser:{}}
}

    onChange = (event) => {
        this.setState({ newUser: { ...this.state.newUser, [event.target.name]: event.target.value } }
        )
    }

onClick = () => {
  
    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT
      });
  console.log("wswswsw")
}

    signup = (event) => {
       event.preventDefault()
        let newUser = {
            ...this.state.newUser, role: {
                id: 2,
                roleName: "USER"
            }
        }
        
        signup(newUser).then(res => {
        if (res.data) {
            this.setState({newUser:{firstName:"" , lastName : "" , mail:"", password:""}})
            toast.success('Your Account has been Created successfully , Please Login', {
                position: toast.POSITION.TOP_RIGHT
              }); 
              
        }
           
        })
            .catch(err => {
                toast.error(" We Have a Technical Problem , please try again ", {
                    position: toast.POSITION.TOP_RIGHT
                  }); 
            })
    }


    render() {
        return (
           
            <Form className="signup-form" onSubmit={this.signup} onChange={this.onChange} >
                <div className="input-container">

                <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.newUser.firstName} placeholder="Enter Your First Name" name="firstName" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.newUser.lastName} placeholder="Enter Your Last Name" name="lastName" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={this.state.newUser.mail} placeholder="Enter email" name="mail" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.newUser.password} placeholder="Password" name="password" required/>
                    </Form.Group>

                    <Button variant="outline-success" className="signup-button" size="lg" type="submit" required>
                        Join Us
                </Button>

                </div>
                <ToastContainer />
            </Form>
            
        )
    }
}
