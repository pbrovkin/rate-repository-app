import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 10,
  },
  inputField: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e1e4e8',
    borderRadius: 3,
  },
  button: {
    padding: 10,
    margin: 5,
    textAlign: 'center',
    borderRadius: 3,
    color: '#ffffff',
    backgroundColor: theme.colors.primary,
  },
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <View style={styles.inputField}>
        <FormikTextInput name='username' placeholder='Username' />
      </View>
      <View style={styles.inputField}>
        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      </View>
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.button}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;