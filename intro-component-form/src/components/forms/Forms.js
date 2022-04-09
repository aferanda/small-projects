import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormContainer } from './styles';

export default function Forms() {
  return (
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
        validationSchema={Yup.object({
          firstName: Yup
            .string()
            .required('First Name cannot be empty'),
          lastName: Yup
            .string()
            .required('Last Name cannot be empty'),
          email: Yup
            .string()
            .email('Looks like this is not an email')
            .required('Email cannot be empty'),
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
        {({ isValid, errors, touched, dirty }) => (
          <FormContainer>
            <button type='button'><span>Try it free 7 days</span> then $20/mo. thereafter</button>
            <Form>
              <Field
                type='text'
                name='firstName'
                placeholder='First Name'
                className={errors.firstName && touched.firstName ? 'invalid' : ''}
              />
              <ErrorMessage name='firstName' component='div' />
              <Field 
                type='text' 
                name='lastName'
                placeholder='Last Name'
                className={errors.lastName && touched.lastName ? 'invalid' : ''}
              />
              <ErrorMessage name='lastName' component='div' />
              <Field 
              type='email' 
              name='email'
              placeholder='Email Address'
              className={errors.email && touched.email ? 'invalid' : ''}
              />
              <ErrorMessage name='email' component='div' />
              <Field 
              type='password' 
              name='password'
              placeholder='Password'
              className={errors.password && touched.password ? 'invalid' : ''}
              />
              <ErrorMessage name='password' component='div' />
              <button 
                type='submit'
                disabled={isValid && dirty ? false : true}
              >
                claim your free trial
              </button>
              <p>By clicling the button, you are agreeing to our <span>Terms and Services</span></p>
            </Form>
          </FormContainer>
        )}
      </Formik>
  );
}
