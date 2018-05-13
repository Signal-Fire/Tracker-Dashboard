import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

export default ({
    date_added
}) => {
    return (
        <Feed.Like>
            <Icon name = 'clock' />
            {date_added}
        </Feed.Like>
    )
}