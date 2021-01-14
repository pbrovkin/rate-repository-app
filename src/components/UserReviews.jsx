import React from 'react';
import { FlatList } from 'react-native';

import ReviewItem from './ReviewItem'
import ItemSeparator from './ItemSeparator'

import useReviews from '../hooks/useReviews'

const ReviewListContainer = ({ reviews }) => {

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <ReviewItem review={item} username={false} />
      )}
    />
  );
};

const UserReviews = () => {
  const { reviews, loading } = useReviews({ includeReviews: true });

  return <ReviewListContainer reviews={reviews} />;
};

export default UserReviews;