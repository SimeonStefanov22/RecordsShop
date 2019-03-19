import React, {Component} from 'react';
import './main.css';
import ButtonBuy from './ButtonBuy';
import ButtonDelete from './ButtonDel';
import {Route} from "react-router-dom";
import ButtonUpdate from "./ButtonUpdate";


class Main extends Component{
    constructor(props){
        super(props)

    }


    createRecordInMain = () => {





        let recordsArr = this.props.games;

        let records =  recordsArr.map(obj => {


            return (


                <div key={obj._id} className="imageVinil">
                    <div className="image">
                        <img src={obj.imageUrl}></img>

                    </div>

                    <Route
                    path="/login"
                    component={()=> this.props.stateUser=== true
                        ?
                        <div className="info">
                            <p>{obj.title}</p>
                            <p>{obj.description}</p>
                            <p>Price: ${obj.price}</p>
                            <ButtonBuy/>
                        </div>
                        :null
                    }
                    />

                    <Route
                        path="/registration"
                        component={()=> this.props.stateUser=== true
                            ?
                            <div className="info">
                                <p>{obj.title}</p>
                                <p>{obj.description}</p>
                                <p>Price: ${obj.price}</p>
                                <ButtonBuy/>
                            </div>
                            :null
                        }
                    />



                    <Route
                    path="/login"
                    component={()=> this.props.stateAdmin === true
                        ?
                        <div>
                            <ButtonDelete dataId={obj._id} vinilClick={this.props.vinilClick} />
                            <ButtonUpdate dataId={obj._id} updateClick={this.props.updateClick}/>
                        </div>

                        :
                        null
                    }
                    />

                </div>
            )});
        return records;
    }


    render() {


        return(


                <div className="main">
                    {this.createRecordInMain()}
                </div>


        )
    }

}
export default Main;