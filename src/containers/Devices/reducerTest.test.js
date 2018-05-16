import * as actionTypes from './actionTypes';
import * as actions from './action';
import * as config from '../../config';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

var Mock = new MockAdapter(axios);

describe('actions', () => {
    it('should return FIND_ALL_DEVICES', () => {
        var store = mockStore({
            devices : []
        })

        var devices = {
            device : {
                name : 'Phone'
            }
        };

        Mock.onGet(config.FIND_ALL_DEVICES_URL).reply(200, devices);

        const expected = [{
            type : actionTypes.FIND_ALL_DEVICES,
            payload : {
                error : false,
                devices : devices
            }
        }]

        return store.dispatch(actions.getDevices()).then(() => {
            expect(store.getActions()).toEqual(expected)
        })
    })
})