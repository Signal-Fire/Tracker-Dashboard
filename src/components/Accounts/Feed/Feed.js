import React from 'react';
import { connect } from 'react-redux';
import { Feed, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { FeedEvent } from './FeedEvent';
import { DefaultEvent } from './DefaultEvent';

const DevicesFeed = ({
    devices
}) => {
    return (
        <Segment>
            <Feed>
                {
                    (devices !== null) ?
                        devices.map(x => (
                            <FeedEvent
                                key = {x._id}
                                email = {x.email}
                                date_added = {moment(x.time).format('MMM Do YYYY')}
                                device_id = {x._id}
                                type = {x.type}
                            />
                        ))
                    : 
                        <DefaultEvent
                            message = 'You are yet to add any users!'
                        />
                }
            </Feed>
        </Segment>
    )
}

const mapStateToProps = state => ({
    devices : state.devices.devices
});

export default connect(mapStateToProps, null)(DevicesFeed);