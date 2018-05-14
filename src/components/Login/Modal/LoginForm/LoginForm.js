import React from 'react';
import { Form } from 'semantic-ui-react';
import { withFormik } from 'formik';

const FormDetail = ({
    values,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isSubmitting
}) => (
    <Form loading = {isSubmitting}>
        <Form.Field>
            {errors.email ? <Label basic color='red' pointing = 'below'>{errors.email}</Label> : false}   
            
        </Form.Field>
        <Form.Group widths = 'equal'>
            <Form.Field>
                
            {errors.password ? <Label basic color = 'red' pointing>{errors.deviceType}</Label> : false}
            </Form.Field>
            <Form.Field>
                <Button 
                    positive
                    type = 'submit' name = 'add' content = 'Login' onClick = {handleSubmit} />
            </Form.Field>
        </Form.Group>
    </Form>
)

const LoginForm = withFormik({

})