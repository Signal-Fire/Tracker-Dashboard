import React from 'react';
import ReactDOM from 'react-dom';
import FeedEvent from './FeedEvent';

it('renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<FeedEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
})


