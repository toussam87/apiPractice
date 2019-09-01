import React, { Component } from 'react';

class UnorderedRender extends React.Component { 
    constructor(props) {
        super(props);
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
            <div className="unorderedData">{this.printUnorderedData()}</div>
        )
    }
}

export default UnorderedRender;