import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: 'white',
    padding: 3
  }
});

const LanguageTag = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} testID='language'>{text}</Text>
    </View>
  );
};

export default LanguageTag;