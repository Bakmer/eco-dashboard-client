import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../views/Login";
import { useMeQuery } from "../generated/graphql";
import { PageLoaderWrapper } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Wrapper from "../components/Layout";

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
      <Wrapper>
        <Route path="/" exact component={Login} />
      </Wrapper>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export default Router;
