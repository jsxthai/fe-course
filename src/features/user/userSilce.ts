import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
  email: string;
  name: string;
  id: number | null;
}

const initialState: UserState = {
  isLogin: false,
  email: "",
  name: "",
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // state.isLogin = action.payload.isLogin;
      // state.email = action.payload.email;
      // state.name = action.payload.name;
      return action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
