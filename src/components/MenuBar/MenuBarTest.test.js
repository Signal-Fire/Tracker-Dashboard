import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

it('renders the menu bar without crashing', () => {
    const store = mockStore({
        users : {
            token : null
        }
    })

    var div = document.createElement('div');
    ReactDOM.render(
    <Provider store = {store}>
        <MenuBar />
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})