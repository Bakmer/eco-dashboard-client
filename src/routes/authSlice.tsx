import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MeQuery } from "../generated/graphql";

interface AuthState {
  data: { id: null } | MeQuery;
  error: boolean;
}

const initialState: AuthState = {
  data: null,
  error: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getMeSuccess(state, action: PayloadAction<MeQuery>) {
      state.data = action.payload;
    },
    getMeFail(state) {
      state.error = true;
    },
  },
});

export const { getMeSuccess, getMeFail } = auth.actions;

export default auth.reducer;
