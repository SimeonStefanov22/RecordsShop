import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./buttonUpdate.css";


class ButtonUpdate extends Component{

    constructor(props){
        super(props)



    }

    render() {



        return(

                <Link to="/admin/update"
                      className='buttonUpdate'
                      data-id={this.props.dataId}
                onClick={this.props.updateClick}
                >Update Record</Link>


        )

    }
}
export default ButtonUpdate;
