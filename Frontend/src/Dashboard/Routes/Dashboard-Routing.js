import React, { Component } from 'react'
import { Route,Switch , Redirect } from "react-router-dom";
import {routes} from './constants/Dashboard-Routes-constants'


export default class DashboardRoutes extends Component {
    render() {
        return (
         
            
            <div>
                 <Switch>
                    
                    {routes.map((el, index) => el.path ? <Route exact path={el.path} component={el.component} key={el.name} />    
                    : <Route component={el.component} key={index} />  

                    )} 
                 
                </Switch>
            </div>
           
        )
    }
}


