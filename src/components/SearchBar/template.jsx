// react
import React from 'react';
import DataFetcherComponent from '../../components/DataFetcher/index.js';
import {Combo} from 'react-bootstrap-combobox';

const render = function() {
    var value = this.state.value;
    return (
        <div className="SearchBar-component">
            <div className="row">
                <div className="input-group">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aris-haspopup="true" aria-expanded="false"
                      onClick={this.toggleExampleList}>
                        <span className="caret"></span>
                        <span className="sr-only"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="#" onClick={this.useThisExample}>Which movie by the Coen brothers stars John Turturro in the role of a New York City playwright?</a></li>
                        <li><a href="#" onClick={this.useThisExample}>Which anti-apartheid activist was born in Mvezo?</a></li>
                        <li><a href="#" onClick={this.useThisExample}>Which recipients of the Victoria Cross died in the Battle of Arnhem?</a></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" value={value} onKeyDown={this.handleEnter} onChange={this.handleChange} size="120"/>
                    <div className="input-group-btn">
                      <button type="button" onClick={this.submitClicked} className="btn btn-primary">
                        Search
                      </button>
                    </div>
                </div>
            </div>
            <DataFetcherComponent request={this.props.value}/>
        </div>
    );
};

export default render;
