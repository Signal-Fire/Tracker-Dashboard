import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

export default ({
    message
}) => (
    <Feed.Event>
        <Feed.Label>
            <Icon name = 'exclamation' />
        </Feed.Label>
        <Feed.Content>
            <Feed.Summary>
                {message}
            </Feed.Summary>
        </Feed.Content>
    </Feed.Event>
);