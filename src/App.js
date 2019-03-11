import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import Header from './HomePage/Header/Header';
import Navigation from './HomePage/Header/navigation'
import Main from "./HomePage/Main/Main";
import Footer from './HomePage/Footer/Footer';
import RegistrationForm from './HomePage/Forms/RegistrationForm';
import LoginForm from "./HomePage/Forms/LoginForm";
import CreateRecord from "./HomePage/Forms/CreateRecord";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        user: null,
        records: [],
        hasFetched: false,
        loginForm: false,
        message: ""
      }


  }

  registerUser(user){
      fetch('http://localhost:9999/auth/signup',{
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      }).then(response => response.json())
          .then(body => {
              if(body.errors){

                  body.errors.forEach(error => {
                      console.log(error);
                  })
              }else{
                  localStorage.setItem('userId', body.userId)
                  localStorage.setItem('username', body.username)

                  this.setState({
                      user: body.username,
                      message: body.message
                  })
              }
          })
  }

  loginUser(user){
      fetch('http://localhost:9999/auth/signin',{
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      }).then(response => response.json())
          .then(body => {
              if(body.errors){
                  body.errors.forEach(error => {
                      console.log(error);
                  })
              }else{
                  localStorage.setItem('userId', body.userId );
                  localStorage.setItem('username', body.username);

                  this.setState({
                      user: body.user,
                      message: body.message
                  })
              }
          })

  }

  render() {
    return(

        <Fragment>
            <Header/>
            <Navigation/>

            <Route
                path="/login"
                exact component={LoginForm}
                loginUser={this.loginUser.bind(this)}
                user={this.state.user}
            />

            <Route
                path="/registration"
                exact component={RegistrationForm}
                registerUser={this.registerUser.bind(this)}
                user={this.state.user}
            />



            <CreateRecord/>
            <Main/>
            <Footer/>



        </Fragment>



        );
  }
}

export default App;
