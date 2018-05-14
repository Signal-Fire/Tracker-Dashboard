import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('renders the form without crashing', () => {
    const store = mockStore({
        users : {
            token : null
        },
        devices : {
            devices : []
        }
    });

    var div = document.createElement('div');
    ReactDOM.render(
        <Provider store = {store}>
            <LoginForm />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})