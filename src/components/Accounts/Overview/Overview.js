import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Feed, CreateForm } from '../';

import './Overview.css';

export default () => {
  return (
        <div className = "Accounts-Table">
            <Grid columns = {2} stackable>
                <Grid.Column>
                        <CreateForm />
                </Grid.Column>
                <Grid.Column>
                        <Feed />
                </Grid.Column>                
            </Grid>
        </div>
  )
};


