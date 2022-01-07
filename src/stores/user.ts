import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "../api/index";

interface UserState {
  name: string;
  family: string;
}

const initialState = {
  name: "",
  family: "",
} as UserState;

const reducers = {};

export const fetchUser = createAsyncThunk("users/fetchById", async () => {
  const { name, family } = await Api.userInfo();
  return { name, family };
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default userSlice.reducer;
