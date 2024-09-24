import React, { useState } from "react";
import { DisplayPostsStyles } from "./DisplayPostsStyle";
import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import { Overlay, StyledCard, StyledGrid, StyledButton } from "./StyledPopUp";

import { useSelector } from "react-redux";
import PopUpUserWork from "./PopUpUserWork";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PopUp = ({ item, setPopUpItem }) => {
  const [displayItem, setDisplayItem] = useState(item);
  const [translatedText, setTranslatedText] = useState("");
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  const itemidx = combinedData.indexOf(displayItem);

  const rightClickHandler = (direction) => {
    setTranslatedText("");
    const newIndex = direction === "right" ? itemidx + 1 : itemidx - 1;
    setDisplayItem(combinedData[newIndex] || displayItem);
  };

  const popUpHandler = () => setPopUpItem("");

  const handleTranslate = async (title, body) => {
    if (translatedText) {
      setTranslatedText("");
    } else {
      const text = `${title} srikamth ${body}`;
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=la|en`
      );
      const translated = (await response.json()).responseData.translatedText
        .toLowerCase()
        .split("srikamth");
      setTranslatedText(translated);
    }
  };

  return (
    <>
      <Overlay onClick={popUpHandler} />
      <StyledButton
        direction="left"
        disabled={itemidx === 0}
        onClick={() => rightClickHandler("left")}
      >
        Left
      </StyledButton>
      <StyledCard>
        <StyledGrid>
          <Box
            component="img"
            sx={{ width: 500, height: 600, objectFit: "cover" }}
            alt="postImg"
            src={displayItem?.webformatURL}
          />
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 600,
              padding: 1,
            }}
          >
            <Grid>
              <Grid sx={DisplayPostsStyles.root}>
                {displayItem?.userImageURL ? (
                  <Box
                    component="img"
                    sx={DisplayPostsStyles.img}
                    alt="userImg"
                    src={displayItem?.userImageURL}
                  />
                ) : (
                  <AccountCircleIcon
                    sx={{ width: 60, height: 60 }}
                    color={"action"}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {displayItem?.user}
                  </Typography>
                  <Box display={"flex"} gap={0.2}>
                    <Typography variant="caption" color="text.secondary">
                      {displayItem?.collections} collections
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {(displayItem?.views / 1000).toFixed(1)}k views
                    </Typography>
                  </Box>
                </CardContent>
              </Grid>
              <CardContent sx={{ marginTop: -1, overflow: "hidden" }}>
                <Typography variant="body2">
                  {translatedText[0] || displayItem?.title}
                </Typography>
                <Typography variant="body2">
                  {translatedText[1] || displayItem?.body}
                </Typography>
                <Button
                  sx={{ fontSize: 10 }}
                  onClick={() =>
                    handleTranslate(displayItem?.title, displayItem?.body)
                  }
                >
                  {translatedText.length === 0 ? "Translate" : "original"}
                </Button>
              </CardContent>
            </Grid>
            <PopUpUserWork />
          </Grid>
        </StyledGrid>
        <StyledButton
          direction="right"
          onClick={() => rightClickHandler("right")}
        >
          Right
        </StyledButton>
      </StyledCard>
    </>
  );
};

export default PopUp;
