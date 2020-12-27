import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../qraphql/queries';
import useSignOut from '../hooks/useSignOut';

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
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  const signOut = useSignOut();

  const authorizedUser = data ? data.authorizedUser : null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/' name='Repositories' />
        {!authorizedUser
          ? <AppBarTab link='/signin' name='Sign in' />
          : <AppBarTab name='Sign out' onPress={() => signOut()} />}
      </ScrollView>
    </View>
  );
};

export default AppBar;