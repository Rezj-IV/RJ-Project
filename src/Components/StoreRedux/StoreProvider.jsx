"use client";

import React from "react";
import { PersistStoreX, store } from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
export  function StoreProvider({ children }) {
  return(
     <Provider store={store}><PersistGate loading={null} persistor={PersistStoreX}>{ children }</PersistGate></Provider>
    )
     
}
