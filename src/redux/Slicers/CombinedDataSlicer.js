import { createSlice } from "@reduxjs/toolkit";

const CombinedSlicer = createSlice({
  name: "CombinedData",
  initialState: {
    CombinedData: [],
  },
  reducers: {
    addCombinedData: (state, { payload }) => {
      // console.log(payload);
      state.CombinedData = [...payload];
    },
  },
});
export const { addCombinedData } = CombinedSlicer.actions;
export default CombinedSlicer.reducer;
