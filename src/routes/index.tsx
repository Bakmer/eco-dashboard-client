import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import { PageLoaderWrapper } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "../components/Layout";

import { Login } from "../views/Login";
import { Orders } from "./Orders";

const Router: React.FC<{}> = () => {
  const { data, loading } = useMeQuery();

  if (loading) {
    return (
      <PageLoaderWrapper>
        <CircularProgress />
      </PageLoaderWrapper>
    );
  }

  if (!data) {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Layout>
        <Orders />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Layout>
    </Switch>
  );
};

export default Router;
