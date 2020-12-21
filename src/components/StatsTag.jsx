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

const kSuffix = (value) => {
  if (value > 999) {
    return Math.round(value / 100) / 10 + 'k';
  } else {
    return value;
  }
};

const StatsTag = ({ name, stat, flag = true, style }) => {
  return (
    <View style={{ ...style, ...styles.container }}>
      <Text fontWeight='bold'>{flag ? kSuffix(stat) : stat}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  );
};

export default StatsTag;