// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {},
  shippingAddress: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = {
        ...state.user,
        userInfo: action.payload,
      };
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
