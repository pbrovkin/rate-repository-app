import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { CREATE_REVIEW } from '../qraphql/mutations';

const useCreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const addReview = async (values) => {
    const { data } = await createReview({ variables: { ...values, rating: Number(values.rating) } });
    if (data) {
      history.push(`/repositories/${data.createReview.repositoryId}`);
    }
  };

  return addReview;
};

export default useCreateReview;