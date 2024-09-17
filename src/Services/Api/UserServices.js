import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsersList } from "../../redux/Slicers/UserDetailsSlicer";
import { addCombinedData } from "../../redux/Slicers/CombinedDataSlicer";

const UserServices = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user_api = "https://jsonplaceholder.typicode.com/users";
    const User_Data = await fetch(user_api);
    const json = await User_Data.json();

    dispatch(addUsersList(json));
    dispatch(addCombinedData(json));
  };
};

export default UserServices;
