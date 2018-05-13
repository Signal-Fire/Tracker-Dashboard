import * as actionTypes from './actionTypes';

const initialState = {
    loading : true,
    devices : []
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.FIND_ALL_DEVICES:
            return {
                ...state,
                loading : false,
                error : payload.error,
                devices : payload.error ? null : payload.devices
            }
        default:
            return state;
    }
}