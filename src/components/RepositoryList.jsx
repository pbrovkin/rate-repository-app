import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import { Picker } from '@react-native-community/picker';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const OrderBy = ({ orderBy, setOrder }) => {
  return (
    <Picker
      selectedValue={orderBy}
      onValueChange={(value) =>
        setOrder(value)
      }>
      <Picker.Item label='Options' />
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='lowest' />
    </Picker>
  )
}

export const RepositoryListContainer = ({ repositories, setOrder }) => {
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
      ListHeaderComponent={<OrderBy setOrder={setOrder} />}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  const { data } = useRepositories({ orderBy, orderDirection });

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
      repositories={data ? data.repositories : null}
      setOrder={setOrder}
    />
  );
};

export default RepositoryList;