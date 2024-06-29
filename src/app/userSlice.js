import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthState: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logout: (state) => {},
    isAuthChange: (state) => {},
  },
});

export const { isAuthChange, login, logout } = userSlice.actions;
export default userSlice.reducer;
