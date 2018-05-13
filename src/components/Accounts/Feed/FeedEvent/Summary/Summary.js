import React from 'react';
import { Feed } from 'semantic-ui-react';

export default ({
    deviceType,
    device_id
}) => {
    return (
        <Feed.Summary>
            {deviceType || 'Phone'}, ID: {device_id}
        </Feed.Summary>
    )
}