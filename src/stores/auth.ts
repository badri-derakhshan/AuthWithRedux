import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../utils/localStorage";

interface AuthState {
  isLogin: boolean;
}

const initialState = {
  isLogin: !!getToken(),
} as AuthState;

const reducers = {
  login: (state: AuthState) => {
    state.isLogin = true;
  },
  logout: (state: AuthState) => {
    state.isLogin = false;
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: reducers,
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
