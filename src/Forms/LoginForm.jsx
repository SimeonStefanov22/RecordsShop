import React, {Component} from 'react';
import './loginForm.css';

class LoginForm extends Component{
    constructor(props){
        super(props)

        this.state ={
            username: null,
            password: null,
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }


    render() {


        return(
            <div className= "loginForm">
                <h1>Login</h1>
                <form onSubmit={(event) =>{
                    event.preventDefault()
                    this.props.loginUser(this.state)
                }}>
                    <label>Username:</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="username" id="userId"/>
                    <br/>
                    <label>Password:</label>
                    <br/>
                    <input type="password" onChange={this.handleChange} name="password" id='passwordId'/>
                    <br/>
                    <input type="submit" value="Login"/>

                </form>

            </div>
        )
    }

}
export default LoginForm;
