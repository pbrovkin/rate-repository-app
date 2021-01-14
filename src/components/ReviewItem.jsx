import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import Text from './Text';
import theme from '../theme';

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

const ReviewItem = ({ review, username }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingNumber}>{review.rating}</Text>
      </View>
      <View style={styles.text}>
        {username
          ? <Text fontWeight='bold'>{review.user.username}</Text>
          : <Text fontWeight='bold'>{review.repository.fullName}</Text>
        }
        <Text color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem