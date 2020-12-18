import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
  },
  text: {
    color: '#ffffff',
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBarTab = ({ name }) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <View style={styles.tab}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;