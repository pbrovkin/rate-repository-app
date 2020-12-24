import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
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

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    error ? styles.redBorder : styles.grayBorder
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;