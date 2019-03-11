import React, {Component} from 'react';

class CreateRecord extends Component{
    constructor(props){
        super(props)

        this.state = {
            author: null,
            description: null,
            imageUrl: null,
            price: null
        }
    }

    render() {
        return(
            <div className="createForm">
                <h1>Create</h1>
                <form onSubmit={event =>{
                    event.preventDefault()

                }}>

                </form>
            </div>
        )
    }

}
export default CreateRecord;
