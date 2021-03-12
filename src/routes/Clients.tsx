import React from "react";
import { Route } from "react-router-dom";
import { ClientsList } from "../views/ClientsList";
import { ClientForm } from "../views/ClientForm";

export const Clients: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Route path="/clientes" exact component={ClientsList} />
      <Route path="/clientes/:clientId" exact component={ClientForm} />
      <Route path="/crear-cliente" exact component={ClientForm} />
    </React.Fragment>
  );
};
