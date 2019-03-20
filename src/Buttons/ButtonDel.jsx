import React, {Component} from 'react';

class ButtonDelete extends Component{

    constructor(props){
        super(props)



    }

    render() {



        return(
            <button data-id={this.props.dataId} onClick={this.props.vinilClick}>Delete</button>
            )

    }
}
export default ButtonDelete;
