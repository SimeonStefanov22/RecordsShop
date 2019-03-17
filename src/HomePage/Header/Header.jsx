import React, {Component} from 'react';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render() {

        return(


            <header>
                <span><img src="https://i2.wp.com/www.gramophonerecordstore.co.uk/wp-content/uploads/2017/09/Gramophonerecordstore-1.png?fit=388%2C126&ssl=1" alt="image"></img></span>
                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mGY7IPBUlBU7B7sIWCrdxJkaWJTqs0xd7U66V_9IRo8AfbNoJw" alt="image"/></span>

                <div className="cart">
                    <img src="https://alba-books.com/catalog/view/theme/default/stylesheet/images/cart.png"></img>
                    <span id="cartTotal">0 product(s)- 0.00 lv</span>
                </div>

            </header>

        )
    }
}

export default Header;
