import * as actionTypes from './actionTypes';

const initialState = {
    token : null,
    user : null
}

export default function(state = initialState, action) {
    var payload = action.payload;

    switch(action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                user : payload.user.email,
                token : payload.user.token
            }
        default:
            return state;
    }
}