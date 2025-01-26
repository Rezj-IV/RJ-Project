"use client";
import session from "redux-persist/lib/storage/session";
import storageLocal from "redux-persist/lib/storage";
import UserReducer from "../Slices/UserSlice";
import ShoppingCartReducer from "../Slices/ShoppingCartSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const StorageConfiguration = {
  key: "itemCart",
  storage: storageLocal,
};

// const SessionConfiguration = {
//   key: "",
//   storage: session,

// };
const rootReducer = combineReducers({
  Users: UserReducer,
  ShoppingCart: ShoppingCartReducer,
});
const persistableReducer = persistReducer(StorageConfiguration, rootReducer);

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
