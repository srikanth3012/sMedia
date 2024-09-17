import { createSlice } from "@reduxjs/toolkit";

const CommentSlicer = createSlice({
  name: "Comments",
  initialState: {
    Comments: [],
  },
  reducers: {
    addCommentsList: (state, { payload }) => {
      state.Comments = [...payload];
    },
  },
});
export const { addCommentsList } = CommentSlicer.actions;
export default CommentSlicer.reducer;
