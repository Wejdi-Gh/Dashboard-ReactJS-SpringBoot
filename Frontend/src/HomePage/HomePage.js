import React, { Component } from 'react';
import HomePageRoutes from './Routes/HomePage-Routing'
import HomePageNavbar from './HomePageNavbar/HomePageNavbar'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageNavbar />
                <HomePageRoutes />
            </div>
        )
    }
}