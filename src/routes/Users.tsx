import React from "react";
import { Route } from "react-router-dom";
import { UsersList } from "../views/UsersList";

export const Users: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Route path="/usuarios" exact component={UsersList} />
    </React.Fragment>
  );
};
