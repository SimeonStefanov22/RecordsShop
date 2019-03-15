import React, {Component} from 'react';
import './main.css';
import ButtonBuy from './ButtonBuy';

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

                </div>
            )});
        return records;
    }


    render() {
        console.log(this.props.games);

        return(


            <div className="main">
                {this.createRecordInMain()}

            </div>


        )
    }

}
export default Main;