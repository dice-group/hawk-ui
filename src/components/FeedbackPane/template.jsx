import React from 'react';

const render = function() {
    return (
        <div className="row FeedbackPane-component panel panel-default">
          <div className="panel-body">
            <div className="col-md-4">
              {this.props.data.key}
            </div>
            <div className="col-md-6">
              {Array.isArray(this.props.data.value) ?
                this.props.data.value.map((it, idx) => <span key={'rdfnodek_'+idx}>{it}<br/></span>)
                 : this.props.data.value}
            </div>
            <div className="col-md-2 FeedbackPane-component-btn-group">
              <a className="btn btn-success">Correct</a>
              <a className="btn btn-danger">Wrong</a>
            </div>
          </div>
        </div>
    );
};

export default render;
