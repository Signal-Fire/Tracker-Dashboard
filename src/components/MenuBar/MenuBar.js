import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Logout } from './Logout';

export default () => (
    <Menu
        inverted
        color = {'blue'}>
        <Menu.Menu position = 'right'>
            <Logout />
        </Menu.Menu>
    </Menu>
)