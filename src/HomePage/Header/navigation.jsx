import React, {Component} from 'react';
import './navigation.css';
import {Link} from "react-router-dom";

class Navigation extends Component{
    constructor(props){
        super(props)
    }

    logoutUser =()=>{
        localStorage.clear();
    }

    render() {
        return(
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/registration">Register</Link></li>
                    <li><Link to="/logout" onClick={this.logoutUser}>Logout</Link></li>

                </ul>
            </nav>
        )
    }
}

export default Navigation;
