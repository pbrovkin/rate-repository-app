import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(
      credentials: {
        username: $username,
        password: $password
      }
    ) {
      accessToken
    }
  }
`;