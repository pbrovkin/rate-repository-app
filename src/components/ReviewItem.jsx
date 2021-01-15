import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { format } from 'date-fns';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  reviewContainer: {
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
  viewButton: {
    ...theme.button,
    flexGrow: 1
  },
  deleteButton: {
    ...theme.button,
    flexGrow: 1,
    backgroundColor: theme.colors.error
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15
  },
});

const ReviewItem = ({ review, username, deleteReview }) => {
  const history = useHistory();

  const confirmDeletion = (id) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL',
          style: 'cancel'
        },
        { text: 'DELETE', onPress: () => deleteReview(id) }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingNumber}>{review.rating}</Text>
        </View>
        <View style={styles.text}>
          {username
            ? <Text fontWeight='bold'>{review.user.username}</Text>
            : <Text fontWeight='bold'>{review.repository.fullName}</Text>}
          <Text color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {!username &&
        <View style={styles.buttonsContainer}>
          <TouchableWithoutFeedback>
            <Text
              fontSize='subheading'
              fontWeight='bold'
              style={styles.viewButton}
              onPress={() => history.push(`/repositories/${review.repository.id}`)}
            >View repository</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text
              fontSize='subheading'
              fontWeight='bold'
              style={styles.deleteButton}
              onPress={() => confirmDeletion(review.id)}
            >Delete review</Text>
          </TouchableWithoutFeedback>
        </View>}
    </View>
  );
};

export default ReviewItem