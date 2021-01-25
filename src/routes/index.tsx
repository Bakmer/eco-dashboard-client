import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../features/Login";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/rootReducer";
import { useMeQuery } from "../generated/graphql";
import { getMeSuccess, getMeFail } from "./authSlice";

const Router: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const { data, error } = useMeQuery();

  useEffect(() => {
    if (!auth.data && !auth.error) {
      if (data) {
        console.log(data);
        dispatch(getMeSuccess(data));
      }
    }
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export default Router;
