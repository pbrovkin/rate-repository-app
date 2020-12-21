import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
    color: '#ffffff',
  },
});

const AppBarTab = ({ name }) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <Text color='appTab' fontWeight='bold' style={styles.tab}>{name}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;