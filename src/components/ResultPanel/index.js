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
        return {
            pruningMessages: [],
            answer: {},
            finalSparqlBase64: ''
        };
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            pruningMessages: newProps.data.pruning_messages ? newProps.data.pruning_messages : [],
            cardinalityOfQuestionResults: newProps.data.cardinality_of_question_results ? newProps.data.cardinality_of_question_results : '',
            finalNumberOfSparqlQueries: newProps.data.final_number_of_SPARQL_queries ? newProps.data.final_number_of_SPARQL_queries : '',
            finalSparqlBase64: newProps.data.final_sparql_base64 ? newProps.data.final_sparql_base64 : '',
            answer: newProps.data.answer ? newProps.data.answer : {value: []}
        });
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
