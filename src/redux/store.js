import { configureStore } from "@reduxjs/toolkit";
import UserDetailsSlicer from "./Slicers/UserDetailsSlicer";
import CommentSlicer from "./Slicers/CommentSlicer";
import PhotoSlicer from "./Slicers/PhotoSlicer";
import PostServicesSlicer from "./Slicers/PostServicesSlicer";
import CombinedDataSlicer from "./Slicers/CombinedDataSlicer";

const Store = configureStore({
  reducer: {
    UserDetails: UserDetailsSlicer,
    Comments: CommentSlicer,
    Photo: PhotoSlicer,
    Posts: PostServicesSlicer,
    combineData: CombinedDataSlicer,
  },
});
export default Store;
