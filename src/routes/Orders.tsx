import React from "react";
import { Route } from "react-router-dom";
import { OrdersList } from "../views/OrdersList";

export const Orders: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={OrdersList} />
    </React.Fragment>
  );
};
