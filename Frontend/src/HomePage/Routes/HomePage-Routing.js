 import React, { Component } from 'react'
import { Route,Switch,Redirect} from "react-router-dom";
import {routes} from './constants/Routes-constants'

export default class HomePageRoutes extends Component {

constructor(props) {
super(props)


}



    render() {
        return (
            <Switch>
                
              
                {routes.map((el,index)=> el.path ? <Route exact path={el.path} component={el.component} key={el.name} />
                
                : <Route render ={()=> <el.component/> } key={el.name} />  )}
                  
            </Switch>
           
        )
    }
}


