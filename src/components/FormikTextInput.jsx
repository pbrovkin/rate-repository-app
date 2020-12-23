import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
  textInput: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
  grayBorder: {
    borderColor: theme.colors.mainBg,
  },
  redBorder: {
    borderColor: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const borderStyles = [
    styles.textInput,
    showError ? styles.redBorder : styles.grayBorder
  ];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={borderStyles}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;