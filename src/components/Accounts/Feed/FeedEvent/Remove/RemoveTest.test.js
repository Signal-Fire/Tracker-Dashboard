import React from 'react';
import ReactDOM from 'react-dom';
import Remove from './Remove';

it('renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<Remove />, div);
    ReactDOM.unmountComponentAtNode(div);
})