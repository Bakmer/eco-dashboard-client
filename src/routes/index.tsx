import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import { PageLoaderWrapper } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "../app/Layout";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../config/cache";

import { Login } from "../views/Login";
import { Orders } from "./Orders";
import { Users } from "./Users";

const Router: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useMeQuery({
    onCompleted: () => {
      isLoggedInVar(true);
      setIsLoading(false);
    },
    onError: (error) => {
      console.log(error);
      setIsLoading(false);
    },
  });

  if (isLoading) {
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
      </Layout>
    </Switch>
  );
};

export default Router;
