import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlicer = createSlice({
  name: "UserDetails",
  initialState: {
    userDetails: [],
  },
  reducers: {
    addUsersList: (state, { payload }) => {
      state.userDetails = [...payload];
    },
  },
});
export const { addUsersList } = UserDetailsSlicer.actions;
export default UserDetailsSlicer.reducer;
