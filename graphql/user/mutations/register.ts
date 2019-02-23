import gql from "graphql-tag";

export const registerMutation = gql`
  mutation Register($data: RegisterInputs!) {
    register(data: $data) {
      id
      lastname
      name
      email
      firstname
    }
  }
`;
