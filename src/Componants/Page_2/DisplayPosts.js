import { Container } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DisplayPostCard from "./DisplayPostCard";
import PopUp from "./PopUp";

const DisplayPosts = () => {
  const [popUpItem, setPopUpItem] = useState();
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);

  const onClickHandler = (item) => {
    setPopUpItem(item);
  };

  return (
    <>
      {" "}
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "left",
        }}
      >
        {combinedData?.map((item) => (
          <DisplayPostCard
            item={item}
            onClickHandler={() => onClickHandler(item)}
            key={item?.id}
          />
        ))}
        {popUpItem && <PopUp item={popUpItem} setPopUpItem={setPopUpItem} />}
      </Container>
    </>
  );
};

export default DisplayPosts;
