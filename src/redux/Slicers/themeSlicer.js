import { createSlice } from "@reduxjs/toolkit";

const ThemeSlicer = createSlice({
  name: "theme",
  initialState: {
    themeStore: [],
  },
  reducers: {
    addsetTheme: (state, { payload }) => {
      state.themeStore = payload;
    },
  },
});
export const { addsetTheme } = ThemeSlicer.actions;
export default ThemeSlicer.reducer;
