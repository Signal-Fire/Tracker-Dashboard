import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const loginUser = (email, password) => async(dispatch) => {
    await axios({
        method : 'POST',
        url : config.ADMIN_LOGIN_URL,
        data : {
            email : email,
            password : password
        }
    }).then(result => {
        dispatch({
            type : actionTypes.USER_LOGIN,
            payload : {
                error : false,
                user : result.data
            }
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.USER_LOGIN,
            payload : {
                error : true
            }
        })
    })
}
