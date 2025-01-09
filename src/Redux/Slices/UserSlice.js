"use client"
const { createSlice } = require("@reduxjs/toolkit");

const initial_State = { token: "" };
const UserSlice = createSlice({
  name: "UserSlice",
  initialState: initial_State,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
        state.token = "";
    },
    
  },
});

export const {setToken , removeToken}= UserSlice.actions
export default UserSlice.reducer