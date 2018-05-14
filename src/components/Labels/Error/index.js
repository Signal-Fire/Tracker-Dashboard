import React from 'react';
import { Label } from 'semantic-ui-react';

export default({
    message,
    ...rest
}) => (
    <Label 
        basic 
        color='red' 
        {...rest}>
        {message}
    </Label>
);