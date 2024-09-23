import { createSlice } from "@reduxjs/toolkit";

const SFusersDataSlicer = createSlice({
  name: "sfUsersDataArray",
  initialState: {
    sfUsersData: [],
  },
  reducers: {
    addSFusersData: (state, { payload }) => {
      state.sfUsersData = payload;
    },
  },
});
export const { addSFusersData } = SFusersDataSlicer.actions;
export default SFusersDataSlicer.reducer;
