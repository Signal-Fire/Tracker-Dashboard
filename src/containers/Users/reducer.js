import * as actionTypes from './actionTypes';

const initialState = {
    token : null
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                token : payload.error ? null : payload.user.token
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                token : null
            }
        default:
            return state;
    }
}