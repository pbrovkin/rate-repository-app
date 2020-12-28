import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  },
});

export const kSuffix = (value) => value > 999 ? Math.round(value / 100) / 10 + 'k' : value;

const StatsTag = ({ name, stat, flag = true, style }) => {
  return (
    <View style={{ ...style, ...styles.container }}>
      <Text fontWeight='bold' testID={name}>{flag ? kSuffix(stat) : stat}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  );
};

export default StatsTag;