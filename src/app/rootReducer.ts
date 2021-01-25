import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../routes/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
