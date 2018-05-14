import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

test('renders without crashing', () => {
    const store = mockStore({
        users : {
            token : null
        }
    })
    var div = document.createElement('div');
    ReactDOM.render(
    <Provider store = {store}>
        <Logout />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})