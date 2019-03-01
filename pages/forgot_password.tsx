import * as React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { ForgotPasswordComponent } from "../generated/apolloComponents";
import Router from "next/router";

export default () => {
  return (
    <Layout title="Forgot Password Page">
      <ForgotPasswordComponent>
        {forgotPassword => (
          <Formik
            onSubmit={async data => {
              const response = await forgotPassword({ variables: data });
              console.log(response);
              Router.push("/check-email");
            }}
            initialValues={{
              email: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                />
                <button type="submit">Send Reset Password Link</button>
              </form>
            )}
          </Formik>
        )}
      </ForgotPasswordComponent>
    </Layout>
  );
};
