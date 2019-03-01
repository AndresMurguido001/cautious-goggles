import gql from "graphql-tag";

export const changePasswordMutation = gql`
  mutation ChangePassword($data: ChangePasswordInputs!) {
    changePassword(data: $data) {
      id
      firstname
      lastname
      email
      name
    }
  }
`;
