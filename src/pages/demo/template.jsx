// react
import React from 'react';
import ChromeComponent from '../../components/Chrome/index.js';
import SearchBarComponent from '../../components/SearchBar/index.js';
import NavigationComponent from '../../components/Navigation/index.js';

const render = function() {
    return (
        <div>
            <NavigationComponent/>
            <ChromeComponent>
                <SearchBarComponent/>
            </ChromeComponent>
        </div>
    );
};

export default render;
