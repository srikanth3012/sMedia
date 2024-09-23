import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayPostCard from "./DisplayPostCard";
import PopUp from "./PopUp";

const DisplayPosts = () => {
  const [popUpItem, setPopUpItem] = useState();
  const [postsData, setPostsData] = useState();
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  const searchFillterData = useSelector(
    (store) => store?.sfPostsDataArray?.sfPostsData
  );

  useEffect(() => {
    const data =
      searchFillterData?.length > 0 ? searchFillterData : combinedData;
    setPostsData(data);
  }, [searchFillterData]);

  const onClickHandler = (item) => {
    setPopUpItem(item);
  };

  return (
    combinedData && (
      <>
        {" "}
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "left",
          }}
        >
          {postsData?.map((item) => (
            <DisplayPostCard
              item={item}
              onClickHandler={() => onClickHandler(item)}
              key={item?.id}
            />
          ))}
          {popUpItem && <PopUp item={popUpItem} setPopUpItem={setPopUpItem} />}
        </Container>
      </>
    )
  );
};

export default DisplayPosts;
