import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
    color: '#ffffff',
  },
});

const AppBarTab = ({ name, link, onPress }) => {
  return (
    <Link to={link} component={TouchableWithoutFeedback} onPress={onPress}>
      <Text fontWeight='bold' style={styles.tab}>{name}</Text>
    </Link>
  );
};

export default AppBarTab;