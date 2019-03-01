import * as React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { ChangePasswordComponent } from "../generated/apolloComponents";
import Router, { withRouter } from "next/router";

interface URLProps {
  router: {
    query: {
      token: string;
    };
  };
}

export default withRouter(({ router: { query: { token } } }: URLProps) => {
  return (
    <Layout title="Change Password Page">
      <ChangePasswordComponent>
        {changePassword => (
          <Formik
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token: token
                  }
                }
              });
              console.log(response);
              Router.push("/hello");
            }}
            initialValues={{
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">Reset Password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    </Layout>
  );
});
