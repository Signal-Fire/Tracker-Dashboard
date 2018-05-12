import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { Summary, Location, DateAdded } from './';

export default ({
    name,
    device_id,
    date_added
}) => {
    return (
        <Feed.Event>
            <Feed.Label>
                <Icon name = 'mobile' />
            </Feed.Label>
            <Feed.Content>
               <Summary name = {name} device_id = {device_id}/>
                <Feed.Meta>
                    <Location />
                    <DateAdded date_added = {date_added}/>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    )
}