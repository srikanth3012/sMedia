import { createSlice } from "@reduxjs/toolkit";

const PostsSlicer = createSlice({
  name: "Posts",
  initialState: {
    Posts: [],
  },
  reducers: {
    addPostList: (state, { payload }) => {
      state.Posts = [...payload];
    },
  },
});
export const { addPostList } = PostsSlicer.actions;
export default PostsSlicer.reducer;
