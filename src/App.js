import React from 'react';
import { Header, Overview } from './components';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

export default () => {
  const store = mockStore({
    devices : {
        devices : []
    }
  })

  return (
    <div className="App">
      <Provider store = {store}>
        <Header />
        <Overview />
      </Provider>
    </div>
  )
}
