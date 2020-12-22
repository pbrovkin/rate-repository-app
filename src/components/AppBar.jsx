import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab link='/' name='Repositories' />
      <AppBarTab link='/signin' name='Sign In' />
    </View>
  );
};

export default AppBar;