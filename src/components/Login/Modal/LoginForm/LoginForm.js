import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { withFormik } from 'formik';
import Yup from 'yup';

import { ErrorLabel } from '../../../Labels';
import * as loginActions from '../../../../containers/Users/action';

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
        <Form.Group widths = 'equal'>
            <Form.Field>
                {errors.email ? <ErrorLabel message = {errors.email} pointing = 'below' /> : false}   
                <Form.Input 
                    type = 'text' name = 'email' placeholder = 'Email Address'
                    value = { values.email } onChange = { handleChange }/>
            </Form.Field>
            <Form.Field>
                {errors.password ? <ErrorLabel message = {errors.password} pointing = 'below' /> : false}
                    <Form.Input
                        type = 'password' name = 'password' placeholder = 'Password'
                        value = { values.password } onChange = { handleChange }
                    />
            </Form.Field>
            <Form.Field>
                <Button 
                    positive
                    type = 'submit' name = 'login' content = 'Login' onClick = {handleSubmit} />
            </Form.Field>
        </Form.Group>
    </Form>
)

const LoginForm = withFormik({
    mapPropsToValues : () => ({
        email : '',
        password : ''
    }),
    validationSchema : Yup.object().shape({
        email : Yup.string().required('Email is required!'),
        password : Yup.string().required('Password is required!'),
    }),
    handleSubmit : (values, { props, setSubmitting }) => {
        props.loginUser(values.email, values.password, (callback) => {
            setSubmitting(callback);
        });
    },
    displayName : 'Login'
})(FormDetail)

const mapDispatchToProps = dispatch => ({
    loginUser : (email, password, callback) => { dispatch(loginActions.loginUser(email, password, callback)) }
})

export default connect(null, mapDispatchToProps)(LoginForm);