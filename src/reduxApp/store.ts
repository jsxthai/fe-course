import { configureStore } from "@reduxjs/toolkit";
import userSilce from "../features/user/userSilce";

const store = configureStore({
  reducer: {
    user: userSilce,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
