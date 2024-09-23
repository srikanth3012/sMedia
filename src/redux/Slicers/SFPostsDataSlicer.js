import { createSlice } from "@reduxjs/toolkit";

const SFPostsDataSlicer = createSlice({
  name: "sfPostsDataArray",
  initialState: {
    sfPostsData: [],
  },
  reducers: {
    addSFPostsData: (state, { payload }) => {
      console.log(payload);
      state.sfPostsData = payload;
    },
  },
});
export const { addSFPostsData } = SFPostsDataSlicer.actions;
export default SFPostsDataSlicer.reducer;
