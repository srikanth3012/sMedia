import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import HeaderStyles from "../HeaderStyle";

const Header = () => {
  return (
    <div>
      <Grid sx={HeaderStyles.root}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">sMedia</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button>News Feed</Button>
          <Button>users</Button>
          <Button>Profile</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
