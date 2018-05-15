import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Feed, CreateForm } from '../';
import { MenuBar } from '../../MenuBar';

import './Overview.css';

export default () => {
  return (
        <div className = "Accounts-Table">
            <Grid columns = {2} stackable>
                <Grid.Column>
                        <Segment>
                            <CreateForm />
                        </Segment>
                </Grid.Column>
                <Grid.Column >
                        <MenuBar />
                    <div className = "Feed-Table">
                        <Feed />
                    </div>
                </Grid.Column>                
            </Grid>
        </div>
  )
};


