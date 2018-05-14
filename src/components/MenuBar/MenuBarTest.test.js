import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar';

it('renders the menu bar without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<MenuBar />, div);
    ReactDOM.unmountComponentAtNode(div);
})