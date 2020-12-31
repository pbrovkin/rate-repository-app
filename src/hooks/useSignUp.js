import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { CREATE_USER } from '../qraphql/mutations';
import useSignIn from './useSignIn';

const useSignUp = () => {
  const signIn = useSignIn();
  const history = useHistory();

  const [createUser] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const { data } = await createUser({ variables: { username, password } });
    if (data) {
      await signIn({ username, password });
      history.push('/');
    }
  };

  return signUp;
};

export default useSignUp;