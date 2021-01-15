import React from 'react';
import { FlatList } from 'react-native';

import ReviewItem from './ReviewItem'
import ItemSeparator from './ItemSeparator'

import useReviews from '../hooks/useReviews'
import useDeleteReview from '../hooks/useDeleteReview'

const ReviewListContainer = ({ reviews, deleteReview }) => {

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
        <ReviewItem review={item} username={false} deleteReview={deleteReview} />
      )}
    />
  );
};

const UserReviews = () => {
  const { reviews, loading, refetch } = useReviews({ includeReviews: true });

  const removeReview = useDeleteReview();

  const deleteReview = (id) => {
    removeReview(id);
    refetch();
  };

  if (loading) return null;

  return <ReviewListContainer reviews={reviews} deleteReview={deleteReview} />;
};

export default UserReviews;