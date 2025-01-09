"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { PersistStoreX, store } from "../Store/Store";
export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={PersistStoreX}>
        {children}
      </PersistGate>
    </Provider>
  );
}
