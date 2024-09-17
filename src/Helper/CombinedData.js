import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCombinedData } from "../redux/Slicers/CombinedDataSlicer";

const CombinedData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store?.UserDetails?.userDetails);
  const postData = useSelector((store) => store?.Posts?.Posts);
  const photosData = useSelector((store) => store?.Photo?.Photos);

  let newModifiedArr = [];
  useEffect(() => {
    newModifiedArr && dispatch(addCombinedData(newModifiedArr));
  }, [newModifiedArr]);
  for (let i = 1; i < 11; i++) {
    let user = userData.filter((item) => item?.id === i);
    postData.forEach((item, idx) => {
      if (item?.userId === i) {
        let modifieditem = { ...user[0], ...item, ...photosData[idx] };
        newModifiedArr.push(modifieditem);
      }
    });
  }

  // console.log(newModifiedArr, "work");
};

export default CombinedData;
