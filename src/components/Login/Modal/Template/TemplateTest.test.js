import React from 'react';
import ReactDOM from 'react-dom';
import Template from './index';

it('renders the template modal with no crash', () => {
    var div = document.createElement('div');
    ReactDOM.render(<Template />, div);
    ReactDOM.unmountComponentAtNode(div);
})
