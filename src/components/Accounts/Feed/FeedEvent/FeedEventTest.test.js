import React from 'react';
import ReactDOM from 'react-dom';
import FeedEvent from './FeedEvent';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

test('renders without crashing', () => {
    const store = mockStore({
        devices : {
            devices : []
        }
    })
    var div = document.createElement('div');
    ReactDOM.render(
    <Provider store = {store}>
        <FeedEvent />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})