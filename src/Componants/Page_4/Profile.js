import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadPostForm from "./UploadPostForm";

const Profile = () => {
  const [postSubmit, setPostSubmit] = useState(false);
  const handlePostSubmit = () => setPostSubmit(true);
  return (
    <Container sx={{ display: "flex" }}>
      {" "}
      <Container
        sx={{
          color: "white",
          width: "100vw",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AccountCircleIcon
          sx={{ fontSize: 40, color: "white" }}
          color="action"
        />
        <Typography>Srikanth Ganji</Typography>
        <Typography>Hyderabad</Typography>
        <UploadPostForm postSubmit={postSubmit} />
        <Button onClick={handlePostSubmit}>Upload</Button>
      </Container>
    </Container>
  );
};

export default Profile;
