import React from "react";
import { Route } from "react-router-dom";
import { ClientsList } from "../views/ClientsList";

export const Clients: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Route path="/clientes" exact component={ClientsList} />
    </React.Fragment>
  );
};
