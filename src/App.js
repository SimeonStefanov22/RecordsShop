import React, {Component, Fragment} from 'react';
import {Route, Switch, Router,Redirect} from "react-router-dom";
import Header from './HomePage/Header/Header';
import Navigation from './HomePage/Header/navigation'
import Main from "./HomePage/Main/Main";
import Footer from './HomePage/Footer/Footer';
import RegistrationForm from './Forms/RegistrationForm';
import LoginForm from "./Forms/LoginForm";
import CreateRecord from "./AdminForms/CreateRecord";
import UpdateRecord from "./AdminForms/UpdateRecord";
import AdminNavigation from "./AfdminNavigation/AdminNavigation";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        user: null,
        games: [],
        hasFetched: false,
        loginForm: false,
        message: "",
        userLoged: false,
        admin: false,
        selectedVinil: null,


      }
      this.vinilDelete = this.vinilDelete.bind(this);

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
                  localStorage.setItem('message', body.message)

                  this.setState({
                      user: body.username,
                      message: body.message,
                      userLoged: true
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
                  localStorage.setItem('message', body.message);

                  this.setState({
                      user: body.user,
                      message: body.message,
                      userLoged : true
                  })
                  console.log("Login!");
                 console.log(body)
                  this.authenticateUser()


              }
          })


  }

    logoutUser () {

      localStorage.clear();
        this.setState({
           userLoged: false,
            admin: false
       })
    }

  createRecord(data) {
      //console.log(data);
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
                    this.fetchRecords();


                }
            })
    }

    updateClick(id){
        this.setState({
            selectedVinil: id
        })
    }

    updateRecord(data) {
        console.log(data);
        let id = this.state.selectedVinil;
        fetch('http://localhost:9999/feed/games/' + id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(body => {
                console.log('thenva');
                if(body.errors){
                    body.errors.forEach(error =>{
                        console.log(error)
                    })
                }else{
                    //Record added successfully
                    this.fetchRecords();
                }
            })
    }


fetchRecords () {
      fetch("http://localhost:9999/feed/games")
          .then(rowData => rowData.json())
          .then(body => {
              this.setState({games: body.games})

          })

  }


componentDidMount() {
      this.fetchRecords();

      this.setState({
        message: localStorage.getItem('message')
    })

  }

  authenticateUser (){

      let userId = localStorage.getItem("userId");
      if(userId === "5c8c0be3db4c1e2264fe894e"){
          this.setState({
              admin: true
          })
          //console.log(this.state.admin);
      }
  }

    vinilClick (event){
        let valueEvent = event.currentTarget.dataset.id;
        this.vinilDelete(valueEvent);
  }


    vinilDelete (id) {
        if(this.state.admin === true){

            fetch('http://localhost:9999/feed/games/' + id  ,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                this.fetchRecords();
            })

        }

    }



  render() {


      return(

        <div>

            <Header />
            <Navigation logout={this.logoutUser.bind(this)}/>

            <Route
                 path="/login"
                exact component= {()=> this.state.admin === true
                    ?
                    <AdminNavigation/>
                    :
                    null
                }
            />

            <Route
                exact path="/admin/create"
                component={()=> <CreateRecord createRecord={this.createRecord.bind(this)} />}
            />

            <Route
                exact path="/admin/update"
            component={()=> <UpdateRecord updateRecord={this.updateRecord.bind(this)}/>}
            />



            <Route
                path="/login"
                component={()=> this.state.userLoged ===false
                    ?
                    <LoginForm loginUser={this.loginUser.bind(this)} user={this.state.user}/>
                    :
                    <Main
                        games={ this.state.games}
                        vinilClick={this.vinilClick.bind(this)}
                        stateAdmin={this.state.admin}
                        stateUser={this.state.userLoged}
                        updateClick={this.updateClick.bind(this)}
                    />}
            />
            <Route
                path="/registration"
                component={()=>  this.state.userLoged ===false
                    ?
                    <RegistrationForm registerUser={this.registerUser.bind(this)} user={this.state.user}/>
                    :
                    <Main games={this.state.games}
                          vinilClick={this.vinilClick.bind(this)}
                          stateAdmin={this.state.admin}
                          stateUser={this.state.userLoged}
                          updateClick={this.updateClick.bind(this)}
                    />
                }
            />

            <Route
                path="/"
                component={()=>
                    <Main games={this.state.games}
                          vinilClick={this.vinilClick.bind(this)}
                          stateAdmin={this.state.admin}
                          stateUser={this.state.userLoged}
                          updateClick={this.updateClick.bind(this)}
                    />}
            />


            <Footer/>

        </div>


    );

  }
}

export default App;
