import { configureStore } from "@reduxjs/toolkit";
import UserDetailsSlicer from "./Slicers/UserDetailsSlicer";
import CommentSlicer from "./Slicers/CommentSlicer";
import PhotoSlicer from "./Slicers/PhotoSlicer";
import PostServicesSlicer from "./Slicers/PostServicesSlicer";
import CombinedDataSlicer from "./Slicers/CombinedDataSlicer";
import themeSlicer from "./Slicers/themeSlicer";

const Store = configureStore({
  reducer: {
    UserDetails: UserDetailsSlicer,
    Comments: CommentSlicer,
    Photo: PhotoSlicer,
    Posts: PostServicesSlicer,
    combineData: CombinedDataSlicer,
    theme: themeSlicer,
  },
});
export default Store;
