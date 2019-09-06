import React, { Component } from 'react';
import { Navbar,  Button } from 'react-bootstrap'
import './HomePageNavbar.css';
import { NavLink } from "react-router-dom";

class HomePageNavbar extends Component {
 
  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand >  <NavLink  activeStyle={{color:"#28A745"}} exact to = "/">  Home</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="signup-login-container">
              <NavLink  activeStyle={{color:"#28A745"}} exact to = "signup">  <Button variant="outline-success" >Signup</Button></NavLink> 
              <NavLink  activeStyle={{color:"#28A745"}} exact to = "login">  <Button variant="outline-success" >Login</Button></NavLink> 
            </div>
          </Navbar.Collapse>
        </Navbar>


      </div>


    )
  }
}

export default HomePageNavbar;