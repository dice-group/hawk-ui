// react
import React from 'react';
import DataFetcherComponent from '../../components/DataFetcher/index.js';

const render = function() {
    var value = this.state.value;
    return (
        <div className="SearchBar-component">
            <div className="row">
                <form>
                    Search: <input type="text" value={value} onChange={this.handleChange} size="120"/>
                    <p className="btn btn-primary" onClick={this.submitClicked}>Submit</p>
                </form>
            </div>
            <DataFetcherComponent request={this.props.value}/>
        </div>
    );
};

export default render;
