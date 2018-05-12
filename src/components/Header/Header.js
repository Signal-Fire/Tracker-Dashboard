import React from 'react';
import { Header, Icon, Sticky } from 'semantic-ui-react';

import './Header.css';

export default () => {
    return (
        <div className = "App-header">  
            <Sticky>       
                <Header 
                    as='h2' 
                    icon 
                    textAlign='center' 
                    inverted >
                    <Icon name='compass' circular />
                    <Header.Content>
                        Tracker
                    </Header.Content>
                </Header>
            </Sticky>
        </div>
    );
}