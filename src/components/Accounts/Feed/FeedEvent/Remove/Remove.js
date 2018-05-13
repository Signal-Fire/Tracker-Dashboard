import React from 'react';
import { connect } from 'react-redux';
import { Feed, Icon, Popup } from 'semantic-ui-react';
import * as deviceActions from '../../../../../containers/Devices/action';

const FeedRemove = ({
    device_id,
    removeDevice
}) => {
    return (
        <Popup 
        size = 'mini'
        trigger = {
            <Feed.Like>
                <Icon name='user delete' onClick = {() => removeDevice(device_id, () => {
                    window.location.reload()
                })}/> 
            </Feed.Like>
        }>
            <Popup.Header>Remove User</Popup.Header>
        </Popup>
    )
}

const mapDispatchToProps = dispatch => ({
    removeDevice : (deviceId, callback) => { dispatch(deviceActions.removeDevice(deviceId, callback)) }
})

export default connect(null, mapDispatchToProps)(FeedRemove);