import React from 'react';
import { View, FlatList } from 'react-native';
import useSingleRepository from '../hooks/useSingleRepository';

import ReviewItem from './ReviewItem'
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';

const SingleRepository = ({ id }) => {
  const { data } = useSingleRepository(id);

  if (!data) {
    return null;
  }

  const reviews = data.repository ?
    data.repository.reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} username={true} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>
        <View style={{ marginBottom: 10 }}>
          <RepositoryItem item={data.repository} />
        </View>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;