import { Box, Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { useDispatch, useSelector } from "react-redux";
import { addCombinedData } from "../../redux/Slicers/CombinedDataSlicer";

const UploadPostForm = ({ postSubmit }) => {
  const [postDetails, setPostDetails] = useState({ user: "Srikanth" });
  const [postImg, setPostImg] = useState();
  const [postTitle, setPostTitle] = useState();
  const dispatch = useDispatch();
  const combinedData = useSelector((store) => store?.combineData?.CombinedData);
  useEffect(() => {
    if (postSubmit) {
      const modifiedData = [
        { ...postDetails, id: 1, webformatURL: postImg, title: postTitle },
        ...combinedData,
      ];
      console.log(...modifiedData);
      dispatch(addCombinedData(modifiedData));
      setPostDetails((prev) => [
        { ...prev, webformatURL: postImg, title: postTitle },
      ]);
    }
  }, [postSubmit]);
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPostImg(imageUrl);
    }
  };
  const handleInputTitle = (e) => {
    const inputTitle = e.target.value;

    setPostTitle(inputTitle);
  };
  postDetails && console.log(postDetails);
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch", backgroundColor: "white" }}>
        <OutlinedInput
          placeholder="Please enter text"
          onChange={handleInputTitle}
        />
      </FormControl>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        {/* Image Upload Input */}
        <Input
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
        </label>

        {/* Display Selected Image */}
        {postImg && (
          <Box
            component="img"
            src={postImg}
            alt="Uploaded"
            sx={{
              mt: 2,
              width: 300,
              height: 300,
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: 3,
            }}
          />
        )}
      </Box>
    </form>
  );
};

export default UploadPostForm;
