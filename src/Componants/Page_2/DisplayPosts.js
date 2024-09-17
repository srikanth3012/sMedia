import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DisplayPostCard from "./DisplayPostCard";

const DisplayPosts = () => {
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "left",
      }}
    >
      {combinedData?.map((item) => (
        <DisplayPostCard item={item} key={item?.id} />
      ))}
    </Container>
  );
};

export default DisplayPosts;
