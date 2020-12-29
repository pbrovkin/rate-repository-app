import React from 'react';
import useSingleRepository from '../hooks/useSingleRepository';

import RepositoryItem from './RepositoryItem';

const SingleRepository = ({ id }) => {
  const { data } = useSingleRepository(id);

  if (!data) {
    return null;
  }

  return (
    <RepositoryItem item={data.repository} />
  );
};

export default SingleRepository;