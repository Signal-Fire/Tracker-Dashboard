import { combineReducers } from 'redux';
import deviceReducer from './Devices/reducer';

export default combineReducers({
    devices : deviceReducer
})