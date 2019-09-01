import React, { Component } from 'react';
import DataQuestions from '../DataQuestions/DataQuestions'

class InitialForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};


        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        this.setState({value: event.target.value});
    }

    handleInputChange(event) {
        this.setState({value: event.target.value});
        
    }

    renderInitialForm(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Number Of People You'd Like to Query :
                        <input type="text" value={this.state.formValue} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        ) 
    }

    render() {
        return (
            this.state.value !== '' ? <DataQuestions numOfPeople={this.state.value} /> : this.renderInitialForm()
        )
    }
    
}

export default InitialForm;
