import React from 'react';
import { Feed } from 'semantic-ui-react';

export default ({
    name,
    device_id
}) => {
    return (
        <Feed.Summary>
            {name}, Device: {device_id}
        </Feed.Summary>
    )
}