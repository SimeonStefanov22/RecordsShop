import React, {Component} from 'react';
import './main.css';
import ButtonBuy from './ButtonBuy';

class Main extends Component{
    constructor(props){
        super(props)


    }




    createRecordInMain = () => {
        let recordsArr = this.props.games;

        for (let obj of recordsArr) {


            return (
                <div className="imageVinil">
                    <div className="image">
                        <img src={obj.imageUrl}></img>

                    </div>

                    <div className="info">
                        <p>{obj.title}</p>
                        <p>{obj.description}</p>
                        <p>Price: 1.00 lv</p>
                        <ButtonBuy/>
                    </div>

                </div>
            )

        }
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
