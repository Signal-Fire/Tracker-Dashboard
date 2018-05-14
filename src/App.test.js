import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

test('renders without crashing', () => {
  const store = mockStore({
    devices : {
        devices : []
    },
    users : {
        token : null
    }
  })
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
