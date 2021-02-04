import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import { PageLoaderWrapper } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "../components/Layout";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../config/cache";

import { Login } from "../views/Login";
import { Orders } from "./Orders";
import { Users } from "./Users";

const Router: React.FC<{}> = () => {
  const { loading } = useMeQuery({
    onCompleted: () => isLoggedInVar(true),
    onError: (error) => console.log(error),
  });
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  if (loading) {
    return (
      <PageLoaderWrapper>
        <CircularProgress />
      </PageLoaderWrapper>
    );
  }

  if (!isLoggedIn) {
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
        <Users />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Layout>
    </Switch>
  );
};

export default Router;
