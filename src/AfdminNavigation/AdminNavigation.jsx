import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './adminNavigation.css';

class AdminNavigation extends Component{
    constructor(props){
        super(props)
    }
    record
    render() {

        return(
            <nav className= "adminNav">
                <ul>
                    <li><Link to="/admin/create">Create record</Link></li>
                    <li><Link to="/admin/update">Update record</Link></li>
                    <li><Link to="/admin/delete/user">Delete user</Link></li>

                </ul>
            </nav>
        )
    }

}
export default AdminNavigation;
