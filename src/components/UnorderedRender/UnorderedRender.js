import React, { Component } from 'react';
import InitialForm from '../InitialForm/InitialForm'

class UnorderedRender extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    printUnorderedData() {
        return  this.props.unorderedData.map((person, index) => {
            return (
                <div className="person" key={index}>{person.gender}</div>
            )
        })
    }

    render() {
        return(
            
            <div className="unorderedData">
                {this.printUnorderedData()}
            </div>
        )
    }
}

export default UnorderedRender;