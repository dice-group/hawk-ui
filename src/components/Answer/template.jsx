/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row Answer-component well">
            <img src={this.props.data.thumbnail} className="col-md-3"/>
            <div className='col-md-9'>
                <div className='row'>
                    <div className="col-md-12 text-justify">{this.props.data.abstract}</div>
                </div>
                <br/>
                <div className='row'>
                    <a href={this.props.data.URI} className="col-md-12 pull-right">{this.props.data.URI}</a>
                </div>
            </div>
        </div>
    );
};

export default render;
