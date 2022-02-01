import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../reducer/HomeSlice";

let rootreducer = combineReducers({ HomeSlice });

let store = configureStore({
  reducer: { rootreducer },
});

export default store;
