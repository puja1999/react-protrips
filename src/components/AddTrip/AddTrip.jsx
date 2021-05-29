import React, { Component } from 'react'
import './AddTrip.css'

export default class AddTrip extends Component{
    constructor(props){
        super(props);
        this.state = {
            trips: [],
            date: '',
            place: '',
            type: ''
        }
    }

    getDate = (e) =>{
        console.log(e.target.value);
        this.setState({ ...this.state, date: e.target.value})
    }

    getPlace = (e) =>{
        console.log(e.target.value);
        this.setState({ ...this.state, place: e.target.value})
        console.log('state', this.state);
    }

    findValue =(e) => {
        console.log(e.target.value);
        this.setState({ ...this.state, type:e.target.value})
    }

    submitButton =(e) =>{
        e.preventDefault();
        this.setState({
            trips: [...this.state.trips,{
                date: this.state.date,
                place:this.state.place,
                type: this.state.type
            }],
        });
        alert("New Trip Added");
    }

    componentDidUpdate(){
        this.props.parentCallback(this.state.trips);
    }

    render(){
        console.log("trips", this.state.trips);
        return(
            <>
                <div className="trip-container">
                    <div className="header-container">
                        <h1>Add a Trip</h1>
                    </div>

                    <form className="form-container">
                        <label className="spacing">Date:</label>
                        <input type="date" onChange={this.getDate}/>
                        <label className="spacing">Place:</label>
                        <input type="text" onChange={this.getPlace}/>
                        <label className="spacing">Type:</label>
                        <select onChange={this.findValue}>
                            <option hidden>Choose Type</option>
                            <option>Trek</option>
                            <option>Club</option>
                            <option>Tropic</option>
                        </select>
                        <button type="submit" className="spacing submit-button" onClick={this.submitButton}>SUBMIT</button>
                    </form>

                </div>
            </>
        )
    }
}