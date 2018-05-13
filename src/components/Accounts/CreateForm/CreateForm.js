import React from 'react';
import { withFormik } from 'formik';
import { Segment, Form, Input, Select, Button } from 'semantic-ui-react';

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
    <Form>
        <Form.Group widths='equal'>
            <Form.Field control={Input} label='Email' placeholder='Email Address' />
        </Form.Group>
        <Form.Field control={Select} label='Device Type' options={options} placeholder='Device Type' />
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
);

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
    // Transform outer props into form values
    mapPropsToValues: props => ({ email: '', password: '' }),
    // Add a custom validation function (this can be async too!)
    validate: (values, props) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    // Submission handler
    handleSubmit: (
      values,
      {
        props,
        setSubmitting,
        setErrors /* setValues, setStatus, and other goodies */,
      }
    ) => {
      alert('hi');
      setTimeout(1000, () => setSubmitting(false));
    },
  })(InnerForm);

export default () => {
    return (
        <Segment>
            <MyForm />
        </Segment>
    );
}