import { Container } from "@mui/material";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import DisplayPostCard from "./DisplayPostCard";
import PopUp from "./PopUp";

const DisplayPosts = () => {
  const [popUpItem, setPopUpItem] = useState(null);
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  const searchFillterData = useSelector(
    (store) => store?.sfPostsDataArray?.sfPostsData
  );

  const postsData = useMemo(() => {
    return searchFillterData?.length > 0 ? searchFillterData : combinedData;
  }, [searchFillterData, combinedData]); // Memoize postsData

  const popUpHandler = (item) => {
    setPopUpItem(item);
  };

  return (
    combinedData && (
      <>
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
              popUpHandler={() => popUpHandler(item)}
              key={item?.id}
            />
          ))}
          {popUpItem && <PopUp item={popUpItem} setPopUpItem={setPopUpItem} />}
        </Container>
      </>
    )
  );
};

// Wrap DisplayPostCard and PopUp with React.memo
export const MemoizedDisplayPostCard = React.memo(DisplayPostCard);
export const MemoizedPopUp = React.memo(PopUp);

export default DisplayPosts;
