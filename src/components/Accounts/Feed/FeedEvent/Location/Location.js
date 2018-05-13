import React from 'react';
import * as config from '../../../../../config';
import { Feed, Icon } from 'semantic-ui-react';

export default ({
    device_id
}) => {
    return (
        <Feed.Like
            as = 'a'
            href = {config.API_URL + "/find/positions/device/" + device_id}  
            >
            <Icon name='compass' />
            Co-Ordinates
        </Feed.Like>
    )
}