import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'stretch',
    padding: 10,
  },
  button: theme.button,
  error: {
    color: theme.colors.error,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username length should be between 1 and 30')
    .max(30, 'Username length should be between 1 and 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password length should be between 5 and 50')
    .max(50, 'Password length should be between 5 and 50')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password confirmation should match the password')
    .required('Password confirm is required')
});

const SingUpForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.error}>{error}</Text>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='passwordConfirm' placeholder='Password confirmation' secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.button}>Sign up</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SingUpContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

const SignUp = () => {
  const [error, setError] = useState('');
  const signUp = useSignUp();

  const onSignUp = async (values) => {
    try {
      const { passwordConfirm, ...credentials } = values;
      await signUp(credentials);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return <SingUpContainer onSubmit={onSignUp} error={error} />;
};

export default SignUp;