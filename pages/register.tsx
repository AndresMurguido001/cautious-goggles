import * as React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { RegisterComponent } from "../generated/apolloComponents";

interface ValidationError {
  constraints: { [key: string]: string };
  property: string;
}

export default () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {register => (
          <Formik
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await register({ variables: { data } });
              } catch (err) {
                let errors: { [key: string]: string } = {};
                err.graphQLErrors[0].validationErrors.forEach(
                  (validationErr: ValidationError) => {
                    Object.values(validationErr.constraints).forEach(
                      (message: string) => {
                        errors[validationErr.property] = message;
                      }
                    );
                  }
                );
                setErrors(errors);
              }
            }}
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: ""
            }}
          >
            {({ values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstname"
                  placeholder="Firstname"
                  component={InputField}
                />
                <Field
                  name="lastname"
                  placeholder="Lastname"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
