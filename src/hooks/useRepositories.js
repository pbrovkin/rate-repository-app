import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../qraphql/queries';

const useRepositories = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  return {
    repositories: data ? data.repositories : undefined,
    loading,
  };
};

export default useRepositories;