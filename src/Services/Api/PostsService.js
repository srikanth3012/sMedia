import { useDispatch } from "react-redux";
import { addPostList } from "../../redux/Slicers/PostServicesSlicer";
import { useEffect } from "react";

const PostsService = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const posts_api = "https://jsonplaceholder.typicode.com/posts";
      const userData = await fetch(posts_api);
      const json = await userData.json();
      if (json) dispatch(addPostList(json));
    } catch (error) {
      console.log(error);
    }
  }
};

export default PostsService;
