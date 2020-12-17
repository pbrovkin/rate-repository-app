import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = ({ name, link }) => {
  return (
    <Link to={link} component={TouchableWithoutFeedback}>
      <Text>{name}</Text>
    </Link>
  );
};

export default AppBarTab;
