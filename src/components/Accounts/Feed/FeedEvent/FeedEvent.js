import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { Summary, Location, DateAdded, Email, Remove } from './';

export default ({
    deviceType,
    device_id,
    date_added,
    email
}) => {
    return (
        <Feed.Event>
            <Feed.Label>
                <Icon name = 'mobile' />
            </Feed.Label>
            <Feed.Content>
               <Summary deviceType = {deviceType} device_id = {device_id}/>
               <Email email = {email}/>
                <Feed.Meta>
                    <Location device_id = {device_id}/>
                    <DateAdded date_added = {date_added}/>
                    <Remove device_id = {device_id} />
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    )
}