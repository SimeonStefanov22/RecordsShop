import React, {Component} from 'react';
import './createRecord.css';

class UpdateRecord extends Component{
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
                <h1>Update record</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.updateRecord(this.state);

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
                    <input type="submit" value="Update"/>
                </form>
            </div>
        )
    }

}
export default UpdateRecord;