"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { PersistStoreX, store } from "../Store/Store";
import Loading from "@/Components/Loading/Loading";

export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={PersistStoreX}>
        {children}
      </PersistGate>
    </Provider>
  );
}
