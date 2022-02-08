import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {
  return (
    <div>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
        validationSchema={Yup.object({
          firstName: Yup
            .string()
            .max(15, 'Must be 15 characters or less')
            .required('First name cannot be empty'),
          lastName: Yup
            .string()
            .max(20, 'Must be 20 characters or less')
            .required('Last name cannot be empty'),
          email: Yup
            .string()
            .email('Looks like this is not an email')
            .required('Required'),
          password: Yup
            .string()
            .min(8, 'Must be 8 characters or more')
            .required('Password cannot be empty')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field 
              type='text'
              name='firstName'
              placeholder='first name'
            />
            <ErrorMessage name='firstName' component='div' />
            <Field 
              type='text' 
              name='lastName'
              placeholder='last name'
              />
            <ErrorMessage name='lastName' component='div' />
            <Field 
            type='email' 
            name='email'
            placeholder='email'
            />
            <ErrorMessage name='email' component='div' />
            <Field 
            type='password' 
            name='password'
            placeholder='password'
            />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
