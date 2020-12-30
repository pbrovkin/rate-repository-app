import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { format } from 'date-fns';
import useSingleRepository from '../hooks/useSingleRepository';
import Text from './Text';
import theme from '../theme';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  repository: {
    marginBottom: 10
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  ratingCircle: {
    width: 36,
    height: 36,
    borderRadius: 19,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 4,
    borderColor: theme.colors.primary
  },
  ratingNumber: {
    color: theme.colors.primary
  },
  text: {
    width: 320,
    paddingLeft: 5,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingNumber}>{review.rating}</Text>
      </View>
      <View style={styles.text}>
        <Text fontWeight='bold'>{review.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

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
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>
        <View style={styles.repository}>
          <RepositoryItem item={data.repository} />
        </View>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;