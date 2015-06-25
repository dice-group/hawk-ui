/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const ResultPanelComponent = React.createClass({
    getInitialState: function() {
        return {pruningMessages: []};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({pruningMessages: newProps.data.pruning_messages});
        this.setState({cardinalityOfQuestionResults: newProps.data.cardinality_of_question_results});
        this.setState({finalNumberOfSparqlQueries: newProps.data.final_number_of_SPARQL_queries});
        this.setState({finalSparqlBase64: newProps.data.final_sparql_base64});
        this.setState({answer: newProps.data.answer});
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default ResultPanelComponent;
