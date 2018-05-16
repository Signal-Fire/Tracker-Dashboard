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
    }),
    it ('should receive the new device being added', () =>{
        var store = mockStore({
            devices : [
                {
                    name : 'Ratchetts Plasma',
                    type : 'Gun'
                }
            ]
        })

        var newDevice = {
            name : 'Thors Hammer',
            type : 'Hammer'
        }

        var expected = [{
            payload : {
                error : false,
                newDevice : {
                    name : 'Thors Hammer',
                    type : 'Hammer'
                }
            },
            type : actionTypes.ADD_DEVICE
        }]

        Mock.onPost(config.CREATE_DEVICE_URL).reply(200, newDevice);

        return store.dispatch(actions.addDevice("phone", "phone", () => {
            console.log('hey')
        })).then(() => {
            expect(store.getActions()).toEqual(expected);
        })
    })
})