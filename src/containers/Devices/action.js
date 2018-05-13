import * as actionTypes from './actionTypes';
import * as config from '../../config';

import axios from 'axios';

export const getDevices = () => async(dispatch) => {
    await axios({
        method : 'GET',
        url : config.FIND_ALL_DEVICES_URL
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

export const addDevice = (email, device, callback) => async(dispatch) => {
    await axios({
        method : 'POST',
        url : config.CREATE_DEVICE_URL,
        data : {
            email : email,
            type : device
        }
    }).then(result => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                error : false,
                newDevice : result.data
            }
        })
        callback(true);
    }).catch(error => {
        dispatch({
            type : actionTypes.ADD_DEVICE,
            payload : {
                error : true
            }
        })
        callback(false);
    })
}

export const removeDevice = (deviceId, callback) => async(dispatch) => {
    await axios({
        method : 'POST',
        url : config.DELETE_DEVICE_URL + '/' + deviceId
    }).then(result => {
        dispatch({
            type : actionTypes.DELETE_DEVICE,
            payload : {
                error : false,
                deletedDevice : result.data
            }
        })
        callback(true);
    }).catch(error => {
        dispatch({
            type : actionTypes.DELETE_DEVICE,
            payload : {
                error : true
            }
        })
        callback(false);
    })
}