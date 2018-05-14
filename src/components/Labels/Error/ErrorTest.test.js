import React from 'react';
import ReactDOM from 'react-dom';
import ErrorLabel from './';

it('renders the error label without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<ErrorLabel />, div);
    ReactDOM.unmountComponentAtNode(div);
})