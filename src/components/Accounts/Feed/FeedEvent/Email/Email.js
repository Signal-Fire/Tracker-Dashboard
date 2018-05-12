import React from 'react';
import { Feed } from 'semantic-ui-react';

export default ({
    email
}) => {
    return (
        <Feed.Summary>
            Email: {email}
        </Feed.Summary>
    )
}