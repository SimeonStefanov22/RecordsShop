import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
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
        games: [],
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
                  console.log("Login!");



              }
          })

  }

  createRecord(data) {
        console.log(data);
        fetch('http://localhost:9999/feed/game/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(body => {
                if(body.errors){
                    body.errors.forEach(error =>{
                        console.log(error)
                    })
                }else{
                    //Record added successfully
                    //this.fetchRecords();

                }
            })
    }



    fetchRecords () {
      fetch("http://localhost:9999/feed/games")
          .then(rowData => rowData.json())
          .then(body => {
              this.setState({games: body.games})
              console.log(body)
          })

  }
  


  showMessage() {

      setTimeout(function () {
          localStorage.getItem("message")
      }, 3000)
  }
  render() {
      
    return(


        <Fragment>

            <Header/>
            <Navigation/>

            <Route path="/" component={()=> <Main games={this.state.games} />}/>

            <Route
                path="/login"
                exact component={()=> <LoginForm loginUser={this.loginUser.bind(this)} user={this.state.user}/> }
            />

            <Route
                path="/registration"
                exact component={()=> <RegistrationForm registerUser={this.registerUser.bind(this)} user={this.state.user}/>}
            />


            <Route
            path="/admin"
            exact component= {()=> <CreateRecord createRecord={this.createRecord.bind(this)}/>}
            />


            <Footer/>

           </Fragment>

    );
  }
}

export default App;
