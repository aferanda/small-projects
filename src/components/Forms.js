import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from '../styles';

export default function Forms() {
  return (
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
            .required('Looks like this is not an email'),
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
          <FormContainer>
            <button type='button'><span>Try it free 7 days</span> then $20/mo. thereafter</button>
            <Form>
              <Field
                type='text'
                name='firstName'
                placeholder='First Name'
              />
              <ErrorMessage name='firstName' component='div' />
              <Field 
                type='text' 
                name='lastName'
                placeholder='Last Name'
                />
              <ErrorMessage name='lastName' component='div' />
              <Field 
              type='email' 
              name='email'
              placeholder='Email Address'
              />
              <ErrorMessage name='email' component='div' />
              <Field 
              type='password' 
              name='password'
              placeholder='Password'
              />
              <ErrorMessage name='password' component='div' />
              <button type='submit' disabled={isSubmitting}>
                claim your free trial
              </button>
              <p>By clicling the button, you are agreeing to our <span>Terms and Services</span></p>
            </Form>
          </FormContainer>
        )}
      </Formik>
  );
}
