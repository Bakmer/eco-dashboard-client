import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../views/Login";
import { useMeQuery } from "../generated/graphql";
import { PageLoaderWrapper } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    return <Route path="/" exact component={Login} />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export default Router;
