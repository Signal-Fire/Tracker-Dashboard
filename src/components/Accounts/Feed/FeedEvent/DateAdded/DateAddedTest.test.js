import React from 'react';
import ReactDOM from 'react-dom';
import DateAdded from './DateAdded';

it('renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<DateAdded />, div);
    ReactDOM.unmountComponentAtNode(div);
})