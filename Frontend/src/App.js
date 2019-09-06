import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard';
import HomePage from './HomePage/HomePage';
import './App.css';
const Dashboar= React.lazy(() => import('./Dashboard/Dashboard'));
const Dashboa= React.lazy(() => import('./Dashboard/Dashboard'));

export default class App extends Component {
   constructor(props) {
    super(props)
    this.state={isLogin:""}
    }
    
    componentDidMount () {

     this.setState({isLogin:true})

    }
    
    render() {
        return (
            <div className="App" >

           {  this.state.isLogin ? <Dashboard/> :<HomePage />}

        </div>
        )
    }
}


