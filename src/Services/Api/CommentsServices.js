import { useDispatch } from "react-redux";
import { addCommentsList } from "../../redux/Slicers/CommentSlicer";

const CommentsServices = () => {
  const dispatch = useDispatch();
  async function getData() {
    const comments_api = "https://jsonplaceholder.typicode.com/comments";
    const userData = await fetch(comments_api);
    const json = await userData.json();
    dispatch(addCommentsList(json));
  }
  getData();
};

export default CommentsServices;
