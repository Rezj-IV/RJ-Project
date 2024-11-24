"use client";
import storageLocal from "redux-persist/lib/storage";
import UserReducer from "./slices/UserSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const configuration = {
  key: "user",
  storage: storageLocal,
};
const rootReducer = combineReducers({
  Users: UserReducer,
});
const persistableReducer = persistReducer(configuration, rootReducer);

export const store = configureStore({
  reducer: persistableReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const PersistStoreX = persistStore(store);
