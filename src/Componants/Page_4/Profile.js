import { Box, Button, Container, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadPostForm from "./UploadPostForm";

const Profile = () => {
  const [postSubmit, setPostSubmit] = useState(false);
  const handlePostSubmit = () => setPostSubmit(true);
  return (
    <Container sx={{ color: "white", width: "100%", height: 1000 }}>
      <AccountCircleIcon sx={{ fontSize: 40, color: "white" }} color="action" />
      <Typography>Srikanth Ganji</Typography>
      <Typography>Hyderabad</Typography>
      <UploadPostForm postSubmit={postSubmit} />
      <Button onClick={handlePostSubmit}>Sign Out</Button>
    </Container>
  );
};

export default Profile;
