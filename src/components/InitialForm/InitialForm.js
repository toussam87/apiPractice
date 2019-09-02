import React, { Component } from 'react';
import DataQuestions from '../DataQuestions/DataQuestions'

class InitialForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            submit: false,
            };


        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit(event) {
        this.setState({submit: true })
        event.preventDefault();      
    }

    handleInputChange(event) {
        this.setState({ value: Number(event.target.value) });
    }

    renderInitialForm(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Number Of People You'd Like to Query :
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }


    render() {
        return (
            this.state.value !== '' && this.state.submit ? <div><DataQuestions numOfPeople={this.state.value} /> </div> : this.renderInitialForm()
        )
    }
    
}

export default InitialForm;
