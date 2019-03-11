import React from "react";
import RegisterForm from "./RegisterForm";


class DynamicHomePage extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {
                        /*TODO: render a form depending on wheather the loginForm property is true*/
                        this.props.user
                            ?
                            <CreateForm createGame={this.props.createGame} />
                            :
                            this.props.loginForm
                                ?
                                <LogInForm loginUser={this.props.loginUser}/>
                                :
                                (<RegisterForm registerUser={this.props.registerUser}/>)
                    }
                </div>
            </div>
        )
    }
}

export default DynamicHomePage;