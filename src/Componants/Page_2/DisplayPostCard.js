import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { DisplayPostsStyles } from "./DisplayPostsStyle";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DisplayPostCard = ({ item, onClickHandler }) => {
  const moontheme = useSelector((store) => store?.theme?.themeStore);
  return (
    <Card
      sx={{
        width: 350,
        height: 400,
        margin: 1,
        padding: 1,
        boxShadow: 3,
        borderRadius: 2,
        border: 1,
        borderColor: "gray",
        backgroundColor: moontheme?.bgColor,
        color: moontheme?.color,
        textAlign: "left",
      }}
      onClick={onClickHandler}
    >
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
            color={moontheme ? moontheme?.color : "action"}
          />
        )}

        <CardContent color={"white"}>
          {" "}
          <Typography gutterBottom variant="p" component="div">
            {item?.user}
          </Typography>
          <Box display={"flex"} gap={0.2}>
            {" "}
            <Typography variant="caption">
              {item?.collections} collections
            </Typography>
            <Typography variant="caption">
              {(item?.views / 1000).toFixed(1)}k views
            </Typography>
          </Box>
        </CardContent>
      </Grid>
      <CardContent
        sx={{
          marginTop: -1,
          height: 26,
          overflow: "hidden",
        }}
      >
        <Typography variant="body2">{item?.title}</Typography>
        <Typography variant="body2">{item?.body}</Typography>
      </CardContent>

      <Box
        component="img"
        sx={{ width: 350, height: 250, objectFit: "cover" }}
        alt="userImg"
        src={item?.webformatURL}
      />
      <hr style={{ position: "relative", top: -4 }} />
    </Card>
  );
};

export default DisplayPostCard;
