import gql from "graphql-tag";

export const confirmMutation = gql`
  mutation Confirm($token: String!) {
    confirmUser(token: $token)
  }
`;
