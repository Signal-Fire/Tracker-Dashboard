import React from 'react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { Segment, Form, Button, Label } from 'semantic-ui-react';

const options = [
    { key: 'a', text: 'Android', value: 'Android' },
    { key: 'i', text: 'iPhone', value: 'iPhone' },
  ]

const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <Form loading = {isSubmitting}>
        <Form.Group widths='equal'>
            <Form.Field>
                <Form.Input name = 'email' type = 'email' placeholder = 'Email Address' />
                {errors.email ? <Label basic color='red' pointing>{errors.email}</Label> : false}
            </Form.Field>
        </Form.Group>
        <Form.Group widths = 'equal'>
            <Form.Field>
                <Form.Select name ='deviceType' placeholder = 'Device Type' options = {options} />
                {errors.deviceType ? <Label basic color = 'red' pointing>{errors.deviceType}</Label> : false}
            </Form.Field>
            <Form.Field>
                <Button 
                    positive
                    type = 'submit'
                    name = 'add'
                    content = 'Add New User'
                    onClick = {handleSubmit}
                />
            </Form.Field>
        </Form.Group>
    </Form>
);

const CreateDeviceForm = withFormik({
    mapPropsToValues : () => ({
        email : '',
        deviceType : ''
    }),
    validationSchema : Yup.object().shape({
        email : Yup.string().required('Email is required!'),
        deviceType : Yup.string().required('Device Type is required!'),
    }),
    handleSubmit : (values, { props, setSubmitting }) => {
        console.log(values);  
    },
    displayName : 'Add Device'
})(InnerForm);

export default () => {
    return (
        <Segment>
            <CreateDeviceForm />
        </Segment>
    );
}