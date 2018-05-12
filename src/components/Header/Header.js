import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default () => {
    return (
        <Header 
            as='h2' 
            icon 
            textAlign='center' 
            inverted 
            color = 'white'>
            <Icon name='compass' circular />
            <Header.Content>
                Tracker
            </Header.Content>
        </Header>
    );
}