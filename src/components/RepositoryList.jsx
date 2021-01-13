import React, { useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Picker } from '@react-native-community/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

import theme from '../theme';

const styles = StyleSheet.create({
  picker: {
    height: 35,
    marginLeft: 280,
    color: theme.colors.textSecondary
  },
  search: {
    height: 30,
    margin: 15,
    marginBottom: 0
  },
});

const Search = ({ setSearchKeyword }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setSearchKeyword(query);
  }

  return (
    <Searchbar
      placeholder='Search'
      style={styles.search}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const OrderBy = ({ orderBy, setOrder }) => {
  return (
    <Picker
      selectedValue={orderBy}
      style={styles.picker}
      onValueChange={(value) =>
        setOrder(value)
      }>
      <Picker.Item label='Options...' />
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='lowest' />
    </Picker>
  )
}

export const RepositoryListContainer = ({
  repositories,
  setOrder,
  setSearchKeyword,
  onEndReach
}) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <>
          <Search setSearchKeyword={setSearchKeyword} />
          <OrderBy setOrder={setOrder} />
        </>
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchDebounce] = useDebounce(searchKeyword, 500);

  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: searchDebounce,
    first: 5
  });

  const onEndReach = () => {
    fetchMore();
  };

  const setOrder = (value) => {
    switch (value) {
      case 'latest':
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
        break;
      case ('highest'):
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
        break;
      case ('lowest'):
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
        break;
    }
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrder={setOrder}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;