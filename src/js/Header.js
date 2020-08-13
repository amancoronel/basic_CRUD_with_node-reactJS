import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavItem from 'react-bootstrap/NavItem';
import {Link, withRouter as WithRouter} from 'react-router-dom';
import auth from './class/auth';
import Axios from 'axios';

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>            
                    <Navbar className="navbar-light navbar-expand-md bg-light sticky-top">
                        <NavbarToggle data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </NavbarToggle>
                        <NavbarCollapse id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                            <NavItem>
                                    <Link className="nav-link" to="">
                                        <button onClick={() => {
                                            Axios.get("/logout")
                                            .then(response => {
                                                auth.logout(() => {
                                                    
                                                })
                                            })
                                            
                                        }}>Logout</button>
                                    </Link>
                                    
                                </NavItem>
                            </ul>
                        </NavbarCollapse>
                    </Navbar>
            </React.Fragment>
            
        )
    }
}

export default Header
