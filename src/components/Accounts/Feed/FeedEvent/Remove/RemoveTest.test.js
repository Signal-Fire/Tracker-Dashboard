import React from 'react';
import ReactDOM from 'react-dom';
import Remove from './Remove';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

test('the form renders', () => {
    const store = mockStore({
        devices : {
            devices : []
        }
    })
    var div = document.createElement('div');
    ReactDOM.render(
    <Provider store = {store}>
        <Remove />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})