import React from "react";
import { MyContext } from "../interfaces/MyContext";
import {
  ConfirmMutation,
  ConfirmVariables
} from "../generated/apolloComponents";
import { confirmMutation } from "../graphql/user/mutations/confirmUser";
import redirect from "../lib/redirect";

const Confirm = () => {
  return (
    <div>
      <h1>Something went wrong!</h1>
    </div>
  );
};

Confirm.getInitialProps = async ({
  query: { token },
  apolloClient,
  ...ctx
}: MyContext) => {
  if (!token) {
    return {};
  }

  const response = await apolloClient.mutate<ConfirmMutation, ConfirmVariables>(
    {
      mutation: confirmMutation,
      variables: { token: token as string }
    }
  );
  console.log(response);
  redirect(ctx, "/login");

  return {};
};

export default Confirm;
