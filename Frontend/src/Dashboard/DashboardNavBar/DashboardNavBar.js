import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import './DashboardNavBar.css';
import {Search} from '../../redux/actions/searchAction'
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  return {
      Search: (searchtext)=> dispatch(Search(searchtext) ),
     
      
  };
}

class NavbarMovies extends Component {
 
onCahngeSearch ( data) {

this.props.Search(data)

}


  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark" expand="lg">
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink  activeStyle={{color:"#28A745"}} exact to = "/"> Home </NavLink> 
            <NavLink  activeStyle={{color:"#28A745"}}  to = "/movies"> Movies</NavLink> 
            <NavLink  activeStyle={{color:"#28A745"}}  to = "/members"> Members </NavLink> 
            <NavLink  activeStyle={{color:"#28A745"}}  to = "/newuser"> New Member </NavLink>   
              
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>this.onCahngeSearch(e.target.value)} />
            </Form>
          </Navbar.Collapse>
        </Navbar>


      </div>


    )
  }
}

export default connect(null,mapDispatchToProps) (NavbarMovies);