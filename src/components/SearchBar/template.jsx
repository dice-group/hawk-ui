// react
import React from 'react';
import DataFetcherComponent from '../../components/DataFetcher/index.js';
import {Combo} from 'react-bootstrap-combobox';

const render = function() {
    var value = this.state.value;
    return (
        <div className="SearchBar-component">
            <div className="row">
                <form>
                    <input type="text" value={value} onChange={this.handleChange} size="120"/>
                    <Combo items={{
                        "Which movie by the Coen brothers stars John Turturro in the role of a New York City playwright?": "Which movie by the Coen brothers stars John Turturro in the role of a New York City playwright?",
                        "Which anti-apartheid activist was born in Mvezo?":"Which anti-apartheid activist was born in Mvezo?",
                        "Which recipients of the Victoria Cross died in the Battle of Arnhem?": "Which recipients of the Victoria Cross died in the Battle of Arnhem?"
                        }} onChange={this.setTheExampleQueryString}>
                    </Combo>
         
                    <div className="SearchBar-component-round-button">
                        <div className="SearchBar-component-round-button-circle">
                            <p onClick={this.submitClicked} href="#" className="SearchBar-component-round-button">Search</p>
                        </div>
                    </div>
                </form>
            </div>
            <DataFetcherComponent request={this.props.value}/>
        </div>
    );
};

export default render;
