import React, {Component} from 'react';
import DynamicHomePage from "./DynamicHomePage";


const divStyle = {
    marginTop: '70px'
};

class AppContent extends Component {

    render() {
        return (
            <div style={divStyle}>
                <DynamicHomePage
                    registerUser={this.props.registerUser}
                    loginUser={this.props.loginUser}
                    loginForm={this.props.loginForm}
                    regForm={this.props.regForm}
                    user={this.props.user}
                    createGame={this.props.createGame}
                    message={this.props.message}
                />

            </div>
        )
    }
}

export default AppContent;