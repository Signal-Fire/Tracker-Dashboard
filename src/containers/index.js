import { combineReducers } from 'redux';
import deviceReducer from './Devices/reducer';
import userReducer from './Users/reducer';

export default combineReducers({
    devices : deviceReducer,
    users : userReducer
})