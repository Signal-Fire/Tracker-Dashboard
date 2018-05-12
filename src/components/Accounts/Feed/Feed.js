import React from 'react';
import { Feed, Segment } from 'semantic-ui-react';
import { FeedEvent } from './FeedEvent';

export default () => {
    return (
        <Segment>
            <Feed>
                <FeedEvent
                    name = 'Lucy Liu'
                    device_id = '249825fdfgiub18'
                    date_added = 'Today'
                    />
            </Feed>
        </Segment>
    )
}