import React from "react";
import { HelloComponent } from "../generated/apolloComponents";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout title="Hello">
      <HelloComponent>
        {({ data }) => (
          <div>{data && data.hello ? data.hello : "Loading..."}</div>
        )}
      </HelloComponent>
    </Layout>
  );
};
