// react
import React from 'react';
import Template from './template.jsx';
import SuperAgent from 'superagent';

const DataFetcherComponent = React.createClass({
    getInitialState: function() {
        return {data: ''};
    },
    componentDidMount: function() {
        window.addEventListener('submit', this.onChange);
    },
    componentWillUnmount: function() {
        window.removeEventListener('submit', this.onChange);
    },
    onChange: function(event) {
        var query = event.target.querySelector('input[value]').value;
        var request = SuperAgent;
        request
        .get('/assets/hawk_api.json')
        .set('query', query)
        .set('Accept', 'application/json')
        .end(this.dataRetrieved);
    },
    dataRetrieved: function(error, response) {
        //TODO: error mitigation here
        var data = JSON.parse(response.text);
        this.setState({data: data});
    },
    render: Template,
});

export default DataFetcherComponent;
