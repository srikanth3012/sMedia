import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { DisplayPostsStyles } from "./DisplayPostsStyle";

const DisplayPostCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 400,
        margin: 1,
        padding: 1,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Grid sx={DisplayPostsStyles.root}>
        <Box
          component="img"
          sx={DisplayPostsStyles.img}
          alt="userImg"
          src={item?.userImageURL}
        />

        <CardContent>
          {" "}
          <Typography gutterBottom variant="p" component="div">
            {item?.user}
          </Typography>
          <Box display={"flex"} gap={0.2}>
            {" "}
            <Typography variant="caption" color="text.secondary">
              {item?.collections} collections
            </Typography>
            <Typography variant="caption" color="text.secondary">
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
