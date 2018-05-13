import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

/* App Component */
import App from './App';

/* CSS */
import './index.css';
import 'semantic-ui-css/semantic.min.css';

/* Redux */
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
