import React from 'react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { Form, Button, Label } from 'semantic-ui-react';
import * as deviceActions from '../../../containers/Devices/action';

const options = [
    { key: 'a', text: 'Android', value: 'Android' },
    { key: 'i', text: 'iPhone', value: 'iPhone' },
  ]

const InnerForm = props => {
    const {
        values,
        errors,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting,
      } = props;

    const _handleSelect = (e, { value, name }) => {
        setFieldValue(name, value);
    }
      
    return (
        <Form loading = {isSubmitting}>
            <Form.Field>
                {errors.email ? <Label basic color='red' pointing = 'below'>{errors.email}</Label> : false}   
                <Form.Input 
                    value = {values.email} 
                    onChange = {handleChange} onBlur = {handleBlur} name = 'email' type = 'email' placeholder = 'Email Address' />
            </Form.Field>
            <Form.Group widths = 'equal'>
                <Form.Field>
                    <Form.Select 
                        onChange = { _handleSelect }
                        name ='deviceType' placeholder = 'Device Type' options = {options} />
                    {errors.deviceType ? <Label basic color = 'red' pointing>{errors.deviceType}</Label> : false}
                </Form.Field>
                <Form.Field>
                    <Button 
                        positive
                        type = 'submit' name = 'add' content = 'Add New User' onClick = {handleSubmit} />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}

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
        props.addDevice(values.email, values.deviceType, () => {
            setSubmitting(false);
            window.location.reload();
        })
    },
    displayName : 'Add Device'
})(InnerForm);

const mapDispatchToProps = dispatch => ({
    addDevice : (email, type, callback) => { dispatch(deviceActions.addDevice(email, type, callback)) }
})

export default connect(null, mapDispatchToProps)(CreateDeviceForm);