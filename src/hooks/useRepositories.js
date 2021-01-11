import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../qraphql/queries';

const useRepositories = (variables) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables,
  });

  return {
    data,
    loading,
  };
};

export default useRepositories;