import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { DisplayPostsStyles } from "../Page_2/DisplayPostsStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

const UsersCard = ({ user }) => {
  const moontheme = useSelector((store) => store?.theme?.themeStore);
  return (
    <Card
      sx={{
        width: 350,
        height: 100,
        margin: 1,
        padding: 1,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: moontheme ? moontheme?.bgColor : "white",
        color: moontheme ? moontheme?.color : `black`,
        border: 1,
      }}
    >
      <Grid sx={DisplayPostsStyles.root}>
        {user?.userImageURL ? (
          <Box
            component="img"
            sx={DisplayPostsStyles.img}
            alt="userImg"
            src={user?.userImageURL}
          />
        ) : (
          <AccountCircleIcon
            sx={{ fontSize: 55 }}
            color={moontheme ? moontheme?.color : "action"}
          />
        )}

        <CardContent color={"white"}>
          {" "}
          <Typography gutterBottom variant="p" component="div">
            {user?.user}
          </Typography>
          <Box display={"flex"} gap={0.2}>
            {" "}
            <Typography variant="caption">
              {user?.collections} collections
            </Typography>
            <Typography variant="caption">
              {(user?.views / 1000).toFixed(1)}k views
            </Typography>
          </Box>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default UsersCard;
