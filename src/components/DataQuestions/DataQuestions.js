import React, { Component } from 'react';
import UnorderedRender from '../UnorderedRender/UnorderedRender';
import InitialForm from '../InitialForm/InitialForm'

class DataQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: []};
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        var numbofPeople = this.props.numOfPeople;

        fetch('https://randomuser.me/api/?results=' + numbofPeople)
        .then(results => {
                return results.json();
            })
            .then(data => {
               this.setState({data: data.results})
            })
    }

    render() {
        return (
            <div className="dataContainer">
                <InitialForm />
                <UnorderedRender unorderedData={this.state.data} />
            </div>
        )
    }
    
}

export default DataQuestions;
