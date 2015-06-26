// react
import React from 'react';
import DataFetcherComponent from '../../components/DataFetcher/index.js';

const render = function() {
    var value = this.state.value;
    return (
        <div className="SearchBar-component">
            <div className="row">
                <form>
                    Your question is: <input type="text" value={value} onChange={this.handleChange} size="120"/>
     
                    <div className="SearchBar-component-round-button">
                        <div className="SearchBar-component-round-button-circle">
                            <p onClick={this.submitClicked} href="#" className="SearchBar-component-round-button">Submit</p>
                        </div>
                    </div>
                </form>
            </div>
            <DataFetcherComponent request={this.props.value}/>
        </div>
    );
};

export default render;
