import { Box, Button, Card, Container, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useDispatch, useSelector } from "react-redux";
import { addCombinedData } from "../../redux/Slicers/CombinedDataSlicer";
import DisplayPostCard from "../Page_2/DisplayPostCard";
const UploadPostForm = ({ postSubmit }) => {
  const [showPreview, setShowPreview] = useState(null);
  const [postDetails, setPostDetails] = useState({
    id: 1,
    user: "Srikanth",
    webformatURL: "",
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);

  useEffect(() => {
    if (postSubmit) {
      const modifiedData = [postDetails, ...combinedData];
      console.log(modifiedData);
      dispatch(addCombinedData(modifiedData));
      setPostDetails((prev) => [
        {
          id: 1,
          user: "Srikanth",
          webformatURL: "",
          title: "",
          body: "",
        },
      ]);
      setShowPreview(false);
    }
  }, [postSubmit]);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPostDetails({ ...postDetails, [event.target.name]: imageUrl });
    }
    setShowPreview(true);
  };

  const handleFormInput = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
    setShowPreview(true);
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <OutlinedInput
            name="title"
            placeholder="Please enter Title"
            value={postDetails?.title || ""}
            onChange={handleFormInput}
            sx={{ m: 1, backgroundColor: "white", width: "30vw" }}
          />
          <OutlinedInput
            name="body"
            multiline
            rows={6}
            placeholder="Please enter youre Thoughts"
            value={postDetails?.body || ""}
            onChange={handleFormInput}
            sx={{
              m: 1,
              backgroundColor: "white",
              width: "30vw",
            }}
          />
        </FormControl>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          {/* Image Upload Input */}
          <Input
            name="webformatURL"
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="upload-button"
          />
          <label htmlFor="upload-button">
            <Button variant="contained" component="span">
              Upload Image
            </Button>

            <Button variant="contained" component="span" sx={{ marginLeft: 1 }}>
              Upload Video
            </Button>
          </label>
        </Box>
      </form>
      {showPreview && (
        <Container
          sx={{ display: "flex", position: "absolute", right: "-50%" }}
        >
          <DisplayPostCard
            item={postDetails}
            sx={{ display: "flex", textAlign: "left" }}
          />
        </Container>
      )}
      {postSubmit && (
        <Card sx={{ display: "flex", position: "absolute", right: "-50%" }}>
          <Typography>Sucessfully Submitted</Typography>
        </Card>
      )}
    </>
  );
};

export default UploadPostForm;
