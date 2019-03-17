import React, {Component} from 'react';
import './createRecord.css';

class CreateRecord extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: null,
            description: null,
            imageUrl: null,
            price: null,
            id: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div className="createForm">
                <h1>Create record</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.createRecord(this.state);

                }}>

                    <label>Title</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="title" id="title"/>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea type="text" onChange={this.handleChange} name="description" id="description"/>
                    <br/>
                    <label>ImageUrl</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="imageUrl" id="imageUrl"/>
                    <br/>
                    <label>Price</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="price" id="priceId"/>
                    <br/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }

}
export default CreateRecord;
