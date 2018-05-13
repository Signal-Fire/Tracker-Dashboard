import React from 'react';
import ReactDOM from 'react-dom';
import DefaultEvent from './DefaultEvent';

test('the event renders', () => {
    var div = document.createElement('div');
    ReactDOM.render(<DefaultEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
})