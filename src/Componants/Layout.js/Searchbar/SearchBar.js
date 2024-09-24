import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSFPostsData } from "../../../redux/Slicers/SFPostsDataSlicer";
import { addSFusersData } from "../../../redux/Slicers/SFuserDataSlicer";

const SearchBar = React.memo(() => {
  const [valueS, setValueS] = useState("");
  const dispatch = useDispatch();
  const postsData = useSelector((store) => store?.combineData?.CombinedData);
  const pageLocation = useParams();

  useEffect(() => {
    setValueS("");
    searchFiltterData("");
  }, [pageLocation]);

  const searchFiltterData = useCallback(
    (searchInput) => {
      // Only update state if input has changed
      if (searchInput !== valueS) {
        setValueS(searchInput);
        let results;

        if (pageLocation.p2) {
          results = postsData?.filter((item) =>
            item?.user.toLowerCase().includes(searchInput.toLowerCase())
          );
          dispatch(addSFusersData(searchInput ? results : []));
        } else if (pageLocation.p1) {
          results = postsData?.filter((item) =>
            item?.user.toLowerCase().includes(searchInput.toLowerCase())
          );
          dispatch(addSFPostsData(searchInput ? results : []));
        }
      }
    },
    [dispatch, pageLocation.p1, pageLocation.p2, postsData, valueS]
  );

  return (
    !pageLocation?.p3 && (
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "40%", // Removed extra space
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{
            "aria-label": "search",
            value: valueS, // Directly setting value here
          }}
          onChange={(e) => searchFiltterData(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    )
  );
});

export default SearchBar;
