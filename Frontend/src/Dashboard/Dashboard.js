import React, { Component } from 'react';
import DashboardNavBar from './DashboardNavBar/DashboardNavBar'
import DashboardRoutes from './Routes/Dashboard-Routing'
import './Dashboard.css'


class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                
                <DashboardNavBar />
           
                <DashboardRoutes />

            </div>
        )
    }
}

export default Dashboard;