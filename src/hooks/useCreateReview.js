import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { CREATE_REVIEW } from '../qraphql/mutations'

const useCreateReview = () => {
  const history = useHistory();

  const [createReview] = useMutation(CREATE_REVIEW);
  
  const create = async (values) => {
    const { data } = await createReview({ variables: { ...values, rating: Number(values.rating) } });
    history.push(`/repo/${data.createReview.repositoryId}`);
  };

  return create;
};

export default useCreateReview;