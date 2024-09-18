import { createSlice } from "@reduxjs/toolkit";

const PhotoSlicer = createSlice({
  name: "Posts",
  initialState: {
    Photos: [],
  },
  reducers: {
    addPhotoList: (state, { payload }) => {
      state.Photos = payload;
    },
  },
});
export const { addPhotoList } = PhotoSlicer.actions;
export default PhotoSlicer.reducer;
