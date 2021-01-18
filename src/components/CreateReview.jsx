import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'stretch',
    padding: 10,
  },
  button: theme.button,
  error: {
    color: theme.colors.error,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner username is a required string'),
  repositoryName: yup
    .string()
    .required('Repository name is a required string'),
  rating: yup
    .number()
    .required('Rating is a required number between 0 and 100')
    .typeError('Rating is a required number between 0 and 100')
    .min(0, 'Rating is a required number between 0 and 100')
    .max(100, 'Rating is a required number between 0 and 100'),
});

const ReviewForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.error}>{error}</Text>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline numberOfLines={4} />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.button}>Create a review</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const ReviewFormContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

const CreateReview = () => {
  const createReview = useCreateReview();
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    try {
      await createReview(values);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} error={error} />;
};

export default CreateReview;