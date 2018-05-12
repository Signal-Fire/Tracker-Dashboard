import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';

test('the feed renders', () => {
    var div = document.createElement('div');
    ReactDOM.render(<Feed />, div);
    ReactDOM.unmountComponentAtNode(div);
})