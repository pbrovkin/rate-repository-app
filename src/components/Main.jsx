import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-native';

import theme from '../theme';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBg
  },
});

const Main = () => {
  const match = useRouteMatch('/repositories/:id');
  const id = match && match.params.id;

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/repositories/:id' exact>
          <SingleRepository id={id} />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;