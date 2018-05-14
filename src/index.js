import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';

import * as stateActions from './store/stateManager';
import * as deviceActions from './containers/Devices/action';

import store from './store';

store.dispatch(deviceActions.getDevices());

store.subscribe(() => {
    stateActions.saveState(store.getState());
});

ReactDOM.render(
            <Provider store = {store}>
                <App />
            </Provider>, 
            document.getElementById('root')
        );
registerServiceWorker();
