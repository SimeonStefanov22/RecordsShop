import React, {Component} from 'react';
import './main.css';
import ButtonBuy from './ButtonBuy';
import ButtonDelete from './ButtonDel';
import {Route} from "react-router-dom";


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

                    <div className="info">
                        <p>{obj.title}</p>
                        <p>{obj.description}</p>
                        <p>Price: ${obj.price}</p>
                        <ButtonBuy/>
                    </div>

                    <Route
                    path="/login"
                    component={()=> this.props.stateAdmin === true
                        ?
                        <ButtonDelete dataId={obj._id} onClick={this.props.vinilClick}/>
                        :
                        null
                    }
                    />

                </div>
            )});
        return records;
    }


    render() {
        //console.log(this.props.games);

        return(


                <div className="main">
                    {this.createRecordInMain()}
                </div>


        )
    }

}
export default Main;