import React, { Component } from 'react'
import './NotFoudPage.css'
import { NavLink } from "react-router-dom";
export default class NotFoudPage extends Component {
    render() {
        return (
            <figure>
            <div className="sad-mac"></div>
            <figcaption>
                <span className="sr-text">Error 404: Not Found</span>
                <span className="e"></span>
                <span className="r"></span>
                <span className="r"></span>
                <span className="o"></span>
                <span className="r"></span>
                <span className="_4"></span>
                <span className="_0"></span>
                <span className="_4"></span>
                <span className="n"></span>
                <span className="o"></span>
                <span className="t"></span>
                <span className="f"></span>
                <span className="o"></span>
                <span className="u"></span>
                <span className="n"></span>
                <span className="d"></span>
            </figcaption>
            <NavLink className="goBack"  to = "/"> Go Back </NavLink> 
        </figure>
        )
    }
}
