import React from 'react';
import * as config from '../../config';
import { Menu } from 'semantic-ui-react';

const Logout = () => {
    localStorage.setItem(config.USER_COOKIE_IDENTIFIER, null);
}
export default () => (
    <Menu
        inverted
        color = {'blue'}>
        <Menu.Menu position = 'right'>
            <Menu.Item name = 'Logout' onClick = { () => Logout()}/>
        </Menu.Menu>
    </Menu>
)