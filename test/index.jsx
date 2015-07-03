/* global describe, it */
// import helpers
import should from 'turris-test-helpers';

// import app
import App from '../src/app.jsx';

describe('App suite', function() {
    it('Should render', function() {
        // const React = this.React;
        // const TestUtils = this.TestUtils;

        // render
        App.start();
        // verify it exists
        should(document.getElementById('mainContainer').children.length).equal(1);
    });
});
require('./component-tree.jsx');
require('./component-posTagger.jsx');
require('./component-posTag.jsx');
require('./component-nounPhraseRecognition.jsx');
require('./component-nounPhrase.jsx');
require('./component-treePruning.jsx');
require('./component-rdfNodesIdentification.jsx');
require('./component-rdfNode.jsx');
require('./component-resultPanel.jsx');
require('./component-pruningMessage.jsx');
require('./component-finalResult.jsx');
require('./component-sparqlQueryVisualizer.jsx');
require('./component-collapsablePanel.jsx');
require('./component-processingLog.jsx');
require('./component-sparqlQueryPanel.jsx');
require('./component-spinner.jsx');
require('./component-feedbackPane.jsx');
