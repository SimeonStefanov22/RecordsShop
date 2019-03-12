import React, {Component} from 'react';
import './main.css';
import ButtonBuy from './ButtonBuy';

class Main extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(

            <div className="main">
                <div className="imageVinil">
                    <div className="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsRae506i9bI5W38VHtsVUrbsAd9HRZ5n6wwmoOOWsB2EgVWb"></img>

                    </div>

                    <div className="info">
                        <p>Author: Test Author</p>
                        <p>Description: Test music style</p>
                        <p>Price: 1.00 lv</p>
                        <ButtonBuy/>
                    </div>

                </div>
            </div>







            )
    }

}
export default Main;
