import React from 'react';
import { Feed, Icon, Popup } from 'semantic-ui-react';

export default () => {
    return (
        <Popup 
        size = 'mini'
        trigger = {
            <Feed.Like>
                <Icon name='user delete' alt = 'hey'/> 
            </Feed.Like>
        }>
            <Popup.Header>Remove User</Popup.Header>
        </Popup>
    )
}