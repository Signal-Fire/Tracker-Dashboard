import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getDevices = () => async(dispatch) => {
    await axios({
        method : 'GET',
        url : config.API_URL + '/find/devices/all'
    }).then(result => {
        dispatch({
            type : actionTypes.FIND_ALL_DEVICES,
            payload : {
                error : false,
                devices : result.data
            }
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.FIND_ALL_DEVICES,
            payload : {
                error : true
            }
        })
    })
}

export const addDevice = () => async(dispatch) => {
    await axios({
        method : 'POST',
        url : config.API_URL + ''
    }).then(result => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                error : false,
                newDevice : result.data
            }
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                error : true
            }
        })
    })
}