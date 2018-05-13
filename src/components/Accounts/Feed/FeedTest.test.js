import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

test('the feed renders', () => {
    const store = mockStore({
        devices : {
            devices : []
        }
    })
    var div = document.createElement('div');
    ReactDOM.render(
    <Provider store = {store}>
        <Feed />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})