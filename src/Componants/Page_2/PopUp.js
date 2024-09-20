import React, { useState } from "react";
import { DisplayPostsStyles } from "./DisplayPostsStyle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
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
    const item =
      direction === "right"
        ? combinedData[itemidx + 1]
        : combinedData[itemidx - 1];
    setDisplayItem(item);
  };
  const popUpHandler = () => setPopUpItem("");
  const handleTranslate = (title, body) => {
    if (translatedText) setTranslatedText("");
    else {
      convertToEnglish();
      async function convertToEnglish() {
        const text = title + " " + "srikamth" + " " + body;
        console.log(text);
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            text
          )}&langpair=la|en`
        );
        const data = await response.json();
        const translated = data.responseData.translatedText;
        const splitText = translated.toLowerCase().split("srikamth");
        console.log(splitText);
        setTranslatedText(splitText);
      }
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.7,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
        onClick={popUpHandler}
      ></div>
      <Button
        sx={{
          margin: 1,
          padding: 1,
          boxShadow: 3,
          position: "fixed",
          left: "6%",
          top: "50%",
          backgroundColor: "white",
          zIndex: 3,
        }}
        disabled={itemidx === 0}
        onClick={() => rightClickHandler("left")}
      >
        Left
      </Button>
      <Card
        sx={{
          width: 1050,
          height: 600,
          margin: 1,
          padding: 1,
          boxShadow: 3,
          borderRadius: 2,
          position: "fixed",
          top: "10%",
          zIndex: 3,
        }}
      >
        <Grid sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Grid sx={{ display: "flex", flexDirection: "column", padding: 1 }}>
            <Grid sx={DisplayPostsStyles.root}>
              {item?.userImageURL ? (
                <Box
                  component="img"
                  sx={DisplayPostsStyles.img}
                  alt="userImg"
                  src={item?.userImageURL}
                />
              ) : (
                <AccountCircleIcon
                  sx={{ width: 60, height: 60 }}
                  color={"action"}
                />
              )}

              <CardContent>
                {" "}
                <Typography gutterBottom variant="p" component="div">
                  {displayItem?.user}
                </Typography>
                <Box display={"flex"} gap={0.2}>
                  {" "}
                  <Typography variant="caption" color="text.secondary">
                    {displayItem?.collections} collections
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {(displayItem?.views / 1000).toFixed(1)}k views
                  </Typography>
                </Box>
              </CardContent>
            </Grid>

            <CardContent
              sx={{
                marginTop: -1,
                overflow: "hidden",
              }}
            >
              <Typography variant="body2">
                {translatedText[0] || displayItem?.title}
              </Typography>
              <Typography variant="body2">
                {translatedText[1]
                  ? translatedText[1]
                  : "" || displayItem?.body}
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
            <PopUpUserWork />
          </Grid>
          <Box
            component="img"
            sx={{ width: 650, height: 600, objectFit: "cover" }}
            alt="userImg"
            src={displayItem?.webformatURL}
          />
        </Grid>
        <Button
          sx={{
            margin: 1,
            padding: 1,
            boxShadow: 3,
            position: "fixed",
            right: "10%",
            top: "50%",
            backgroundColor: "white",
            zIndex: 3,
          }}
          onClick={() => rightClickHandler("right")}
        >
          right
        </Button>
      </Card>
    </>
  );
};

export default PopUp;
