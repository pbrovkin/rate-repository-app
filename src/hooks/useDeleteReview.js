import { useMutation } from '@apollo/react-hooks';

import { DELETE_REVIEW } from '../qraphql/mutations';


const useDeleteReview = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const removeReview = async (id) => {
    await deleteReview({ variables: { id } });
  };

  return removeReview;
};

export default useDeleteReview;