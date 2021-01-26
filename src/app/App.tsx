import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { cache } from "../config/cache";
import { BrowserRouter } from "react-router-dom";
import { useSnackbar } from "notistack";
import { responseErrorHandler } from "../utils";
import Routes from "../routes";

const App: React.FC<{}> = () => {
  const { enqueueSnackbar } = useSnackbar();

  const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

  const handleErrors = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      if (response.errors?.length) {
        responseErrorHandler(response.errors, enqueueSnackbar);
      }
      return response;
    });
  });

  const client = new ApolloClient({
    cache,
    link: handleErrors.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
