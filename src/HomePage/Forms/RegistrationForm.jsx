import React, {Component} from 'react';
import './registrationForm.css';

class RegistrationForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: null,
            email: null,
            password: null,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        alert('A name was submitted: ' + this.state[this.username, this.email]);

    }


    render() {
        return(
            <div className="registerForm">
                <h1>Registration</h1>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    this.props.registerUser(this.state)
                }}>

                    <label>Username:</label>

                        <br/>
                        <input
                            type="text"
                            name="username"
                            id="userId"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />

                            <br/>

                    <label>Email:</label>

                    <br/>

                    <input
                        type="email"
                        name="email"
                        id="emailId"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <br/>

                    <label>Password:</label>

                    <br/>
                    <input
                        type="password"
                        name="password"
                        id="passwordId"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <br/>

                    <input type="submit" value="Registration"/>

                </form>

            </div>
        )
    }

}
export default RegistrationForm;
