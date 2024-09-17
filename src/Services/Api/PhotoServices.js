import { useDispatch } from "react-redux";
import { addPhotoList } from "../../redux/Slicers/PhotoSlicer";
import { useEffect } from "react";

const PhotoServices = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const photos_api =
        "https://pixabay.com/api/?key=45964872-2124cf8fff233cdad66490825&q=garden&image_type=architect&pretty=true&per_page=100";
      const userData = await fetch(photos_api);
      const json = await userData.json();

      if (json) dispatch(addPhotoList(json?.hits));
    } catch (error) {
      console.log(error);
    }
  }
};

export default PhotoServices;
