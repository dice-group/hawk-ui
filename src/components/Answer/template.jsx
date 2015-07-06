/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="Answer-component well">
            <div className="row">
            <img src={this.props.data.thumbnail} className="col-md-2"/>
              <div className='col-md-10'>
                  <div className='row'>
                      <div className="col-md-12 text-justify">{this.props.data.abstract}</div>
                  </div>
                  <br/>
                  <div className='row'>
                      <a href={this.props.data.URI} className="col-md-12 pull-right">{this.props.data.URI}</a>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default render;
